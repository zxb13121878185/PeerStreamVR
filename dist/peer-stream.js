const SpecialKeyCodes = { Backspace: 8, ShiftLeft: 16, ControlLeft: 17, AltLeft: 18, ShiftRight: 253, ControlRight: 254, AltRight: 255 },
    MouseButton = { MainButton: 0, AuxiliaryButton: 1, SecondaryButton: 2, FourthButton: 3, FifthButton: 4 },
    MouseButtonsMask = { 1: 0, 2: 2, 4: 1, 8: 3, 16: 4 },
    RECEIVE = { QualityControlOwnership: 0, Response: 1, Command: 2, FreezeFrame: 3, UnfreezeFrame: 4, VideoEncoderAvgQP: 5, LatencyTest: 6, InitialSettings: 7, FileExtension: 8, FileMimeType: 9, FileContents: 10, InputControlOwnership: 12, Protocol: 255 },
    SEND = { IFrameRequest: 0, RequestQualityControl: 1, FpsRequest: 2, AverageBitrateRequest: 3, StartStreaming: 4, StopStreaming: 5, LatencyTest: 6, RequestInitialSettings: 7, UIInteraction: 50, Command: 51, KeyDown: 60, KeyUp: 61, KeyPress: 62, MouseEnter: 70, MouseLeave: 71, MouseDown: 72, MouseUp: 73, MouseMove: 74, MouseWheel: 75, TouchStart: 80, TouchEnd: 81, TouchMove: 82, GamepadButtonPressed: 90, GamepadButtonReleased: 91, GamepadAnalog: 92 };
let iceServers;
class PeerStream extends HTMLVideoElement { constructor() { super(), window.ps = this, this.ws = { send() {}, close() {} }, this.pc = { close() {} }, this.setupVideo(), this.registerKeyboardEvents(), this.registerMouseHoverEvents(), this.registerFakeMouseEvents(), document.addEventListener("pointerlockchange", (() => { document.pointerLockElement === this ? this.registerPointerLockEvents() : this.registerMouseHoverEvents() }), !1), this.addEventListener("loadeddata", (e => { this.style["aspect-ratio"] = this.videoWidth / this.videoHeight })) }
    checkWebRTCSupport() { const e = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection; if (!e) return console.warn("checkWebRTCSupport RTCPeerConnection not supported"), !1; let t = !1,
            n = null; if (e) { try { n = new e; const s = n.createDataChannel("test");
                t = !!s, s.close(), n.close() } catch (e) { return console.error(e), console.warn("checkWebRTCSupport dataChannelSupported not supported"), !1 } if (!t) return console.warn("checkWebRTCSupport DataChannel not supported"), !1 } return !0 }
    async connectedCallback() { if (0 == this.checkWebRTCSupport()) { const e = document.createElement("div");
            e.innerHTML = "你的浏览器版本过低!<br>推荐使用谷歌100以上版本浏览器!!", e.style.position = "absolute", e.style.top = "50%", e.style.left = "50%", e.style.transform = "translate(-50%, -50%)", e.style.background = "rgba(255, 255, 255, 0.8)", e.style.padding = "10px", e.style.borderRadius = "5px", e.style.display = "block", this.parentNode.appendChild(e) }
        this.isConnected && ("connected" !== this.pc.connectionState || "open" !== this.dc.readyState || 1 !== this.ws.readyState ? (this.ws.onclose = null, this.ws.close(1e3), this.ws = new WebSocket(this.id || location.href.replace(/^http/, "ws"), "peer-stream"), this.ws.onerror, this.ws.onopen = () => { console.info("✅", this.ws) }, this.ws.onmessage = e => { this.onWebSocketMessage(e.data) }, this.ws.onclose = e => { console.warn(e), this.dispatchEvent(new CustomEvent("playerdisconnected", {})), clearTimeout(this.reconnect), this.reconnect = setTimeout((() => this.connectedCallback()), 3e3) }) : this.play()) }
    disconnectedCallback() { setTimeout((() => { this.isConnected || (this.ws.close(1e3), this.pc.close(), console.log("❌ peer connection closing")) }), 5e3) }
    adoptedCallback() {}
    attributeChangedCallback(e, t, n) { this.isConnected && this.ws.close(1e3) }
    async onWebSocketMessage(e) { try { e = JSON.parse(e) } catch { return void console.debug("↓↓", e) } if ("offer" === e.type) { this.setupPeerConnection(); const t = new RTCSessionDescription(e);
            console.log("↓↓ offer", t), await this.pc.setRemoteDescription(t), this.pc.addTransceiver("video", { direction: "recvonly" }); const n = await this.pc.createAnswer();
            await this.pc.setLocalDescription(n), console.log("↑↑ answer", n), this.ws.send(JSON.stringify(n)); for (let e of this.pc.getReceivers()) e.playoutDelayHint = 0 } else if ("iceCandidate" === e.type) { const t = new RTCIceCandidate(e.candidate);
            console.log("↓↓ candidate:", t), await this.pc.addIceCandidate(t) } else if ("answer" === e.type) { const t = new RTCSessionDescription(e);
            await this.pc.setRemoteDescription(t), console.log("↓↓ answer:", t); for (const e of this.pc.getReceivers()) e.playoutDelayHint = 0 } else "playerqueue" === e.type ? (this.dispatchEvent(new CustomEvent("playerqueue", { detail: e })), console.log("↓↓ playerqueue:", e)) : "seticeServers" === e.type ? (iceServers = e.iceServers, console.log("↓↓ seticeServers:", e)) : "playerConnected" === e.type ? (console.log("↓↓ playerConnected:", e), this.setupPeerConnection_ue4(), this.setupDataChannel_ue4()) : "ping" === e.type ? (console.log("↓↓ ping:", e), e.type = "pong", this.ws.send(JSON.stringify(e))) : "ueDisConnected" === e.type ? (this.dispatchEvent(new CustomEvent("ueDisConnected", { detail: e })), console.log("↓↓ ueDisConnected:", e)) : console.warn("↓↓", e) }
    onDataChannelMessage(e) { e = new Uint8Array(e); const t = new TextDecoder("utf-16"); switch (e[0]) {
            case RECEIVE.VideoEncoderAvgQP:
                this.VideoEncoderQP = +t.decode(e.slice(1)); break;
            case RECEIVE.Response:
                { const n = t.decode(e.slice(1));this.dispatchEvent(new CustomEvent("message", { detail: n })), console.info(n); break }
            case RECEIVE.Command:
                { const n = JSON.parse(t.decode(e.slice(1)));console.info("↓↓ command:", n), "onScreenKeyboard" === n.command && console.info("You should setup a on-screen keyboard"); break }
            case RECEIVE.FreezeFrame:
                { new DataView(e.slice(1, 5).buffer).getInt32(0, !0); const t = e.slice(5);console.info("↓↓ freezed frame:", t); break }
            case RECEIVE.UnfreezeFrame:
                console.info("↓↓ 【unfreeze frame】"); break;
            case RECEIVE.LatencyTest:
                { const n = JSON.parse(t.decode(e.slice(1)));console.info("↓↓ latency timings:", n); break }
            case RECEIVE.QualityControlOwnership:
                this.QualityControlOwnership = 0 !== e[1], console.info("↓↓ Quality Control Ownership:", this.QualityControlOwnership); break;
            case RECEIVE.InitialSettings:
                this.InitialSettings = JSON.parse(t.decode(e.slice(1))), console.log("↓↓ initial setting:", this.InitialSettings); break;
            case RECEIVE.InputControlOwnership:
                this.InputControlOwnership = 0 !== e[1], console.log("↓↓ input control ownership:", this.InputControlOwnership); break;
            case RECEIVE.Protocol:
                { let n = JSON.parse(t.decode(e.slice(1))); if (console.log(n), 0 === n.Direction)
                        for (let e in n) SEND[e] = n[e].id;
                    else if (1 === n.Direction)
                        for (let e in n) RECEIVE[e] = n[e].id;this.dc.send(new Uint8Array([SEND.RequestInitialSettings])), this.dc.send(new Uint8Array([SEND.RequestQualityControl])); break }
            default:
                console.error("↓↓ invalid data:", e) } }
    setupVideo() { this.tabIndex = 0, this.playsInline = !0, this.disablepictureinpicture = !0, this.muted = !0, this.autoplay = !0, this.style["pointer-events"] = "none", this.style["object-fit"] = "fill" }
    setupDataChannel(e) { this.dc = e.channel, this.dc.binaryType = "arraybuffer", this.dc.onopen = e => { console.log("✅", this.dc), this.style.pointerEvents = "auto" }, this.dc.onclose = e => { console.info("❌ data channel closed"), this.style.pointerEvents = "none", this.blur() }, this.dc.onerror, this.dc.onmessage = e => { this.onDataChannelMessage(e.data) } }
    setupDataChannel_ue4(e = "hello") { this.dc = this.pc.createDataChannel(e, { ordered: !0 }), this.dc.binaryType = "arraybuffer", this.dc.onopen = t => { console.log("✅ data channel connected:", e), this.style.pointerEvents = "auto", this.dc.send(new Uint8Array([SEND.RequestInitialSettings])), this.dc.send(new Uint8Array([SEND.RequestQualityControl])) }, this.dc.onclose = t => { console.info("❌ data channel closed:", e), this.style.pointerEvents = "none" }, this.dc.onmessage = e => { this.onDataChannelMessage(e.data) } }
    setupPeerConnection() { this.pc.close(), this.pc = new RTCPeerConnection({ sdpSemantics: "unified-plan", bundlePolicy: "balanced", iceServers }), this.pc.ontrack = e => { console.log(`↓↓ ${e.track.kind} track:`, e), "video" === e.track.kind ? this.srcObject = e.streams[0] : "audio" === e.track.kind && (this.audio = document.createElement("audio"), this.audio.autoplay = !0, this.audio.srcObject = e.streams[0]) }, this.pc.onicecandidate = e => { e.candidate ? .candidate && (console.log("↑↑ candidate:", e.candidate), this.ws.send(JSON.stringify({ type: "iceCandidate", candidate: e.candidate }))) }, this.pc.ondatachannel = e => { this.setupDataChannel(e) } }
    setupPeerConnection_ue4() { this.pc.close(), this.pc = new RTCPeerConnection({ sdpSemantics: "unified-plan", bundlePolicy: "balanced", iceServers }), this.pc.ontrack = e => { console.log(`↓↓ ${e.track.kind} track:`, e), "video" === e.track.kind ? this.srcObject = e.streams[0] : "audio" === e.track.kind && (this.audio = document.createElement("audio"), this.audio.autoplay = !0, this.audio.srcObject = e.streams[0]) }, this.pc.onicecandidate = e => { e.candidate ? .candidate && (console.log("↑↑ candidate:", e.candidate), this.ws.send(JSON.stringify({ type: "iceCandidate", candidate: e.candidate }))) }, this.pc.onnegotiationneeded = e => { this.setupOffer() } }
    async setupOffer() { const e = await this.pc.createOffer({ offerToReceiveAudio: +this.hasAttribute("audio"), offerToReceiveVideo: 1, voiceActivityDetection: !1 });
        e.sdp = e.sdp.replace("useinbandfec=1", "useinbandfec=1;stereo=1;sprop-maxcapturerate=48000"), this.pc.setLocalDescription(e), this.ws.send(JSON.stringify(e)), console.log("↓↓ sending offer:", e) }
    keysDown = new Set;
    registerKeyboardEvents() { this.onkeydown = e => { const t = SpecialKeyCodes[e.code] || e.keyCode;
            this.dc.send(new Uint8Array([SEND.KeyDown, t, e.repeat])), this.keysDown.add(t), e.keyCode === SpecialKeyCodes.Backspace && this.onkeypress({ keyCode: SpecialKeyCodes.Backspace }) }, this.onkeyup = e => { const t = SpecialKeyCodes[e.code] || e.keyCode;
            this.dc.send(new Uint8Array([SEND.KeyUp, t])), this.keysDown.delete(t) }, this.onkeypress = e => { const t = new DataView(new ArrayBuffer(3));
            t.setUint8(0, SEND.KeyPress), t.setUint16(1, SpecialKeyCodes[e.code] || e.keyCode, !0), this.dc.send(t) }, this.onblur = e => { this.keysDown.forEach((e => { this.dc.send(new Uint8Array([SEND.KeyUp, e])) })), this.keysDown.clear() } }
    registerTouchEvents() { const e = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
            t = {};
        this.ontouchstart = n => { for (const s of n.changedTouches) { const n = e.pop();
                void 0 === n && console.info("exhausted touch indentifiers"), t[s.identifier] = n }
            this.emitTouchData(SEND.TouchStart, n.changedTouches, t), n.preventDefault() }, this.ontouchend = n => { this.emitTouchData(SEND.TouchEnd, n.changedTouches, t); for (const s of n.changedTouches) e.push(t[s.identifier]), delete t[s.identifier];
            n.preventDefault() }, this.ontouchmove = e => { this.emitTouchData(SEND.TouchMove, e.touches, t), e.preventDefault() } }
    registerFakeMouseEvents() { let e; const { left: t, top: n } = this.getBoundingClientRect();
        this.ontouchstart = s => { if (void 0 === e) { const o = s.changedTouches[0];
                e = { id: o.identifier, x: o.clientX - t, y: o.clientY - n }, this.onmouseenter(s), this.emitMouseDown(MouseButton.MainButton, e.x, e.y) }
            s.preventDefault() }, this.ontouchend = s => { if (e)
                for (const o of s.changedTouches)
                    if (o.identifier === e.id) { const i = o.clientX - t,
                            a = o.clientY - n;
                        this.emitMouseUp(MouseButton.MainButton, i, a), this.onmouseleave(s), e = void 0; break }
            s.preventDefault() }, this.ontouchmove = s => { if (e)
                for (const o of s.touches)
                    if (o.identifier === e.id) { const s = o.clientX - t,
                            i = o.clientY - n;
                        this.emitMouseMove(s, i, s - e.x, i - e.y), e.x = s, e.y = i; break }
            s.preventDefault() } }
    registerMouseHoverEvents() { this.registerMouseEnterAndLeaveEvents(), this.onmousemove = e => { this.emitMouseMove(e.offsetX, e.offsetY, e.movementX, e.movementY), e.preventDefault() }, this.onmousedown = e => { this.emitMouseDown(e.button, e.offsetX, e.offsetY) }, this.onmouseup = e => { this.emitMouseUp(e.button, e.offsetX, e.offsetY) }, this.oncontextmenu = e => { this.emitMouseUp(e.button, e.offsetX, e.offsetY), e.preventDefault() }, this.onwheel = e => { this.emitMouseWheel(e.wheelDelta, e.offsetX, e.offsetY), e.preventDefault() } }
    registerPointerLockEvents() { this.registerMouseEnterAndLeaveEvents(), console.info("mouse locked in, ESC to exit"); const { clientWidth: e, clientHeight: t } = this; let n = e / 2,
            s = t / 2;
        this.onmousemove = o => { n += o.movementX, s += o.movementY, n = (n + e) % e, s = (s + t) % t, this.emitMouseMove(n, s, o.movementX, o.movementY) }, this.onmousedown = e => { this.emitMouseDown(e.button, n, s) }, this.onmouseup = e => { this.emitMouseUp(e.button, n, s) }, this.onwheel = e => { this.emitMouseWheel(e.wheelDelta, n, s) } }
    registerMouseEnterAndLeaveEvents() { this.onmouseenter = e => { this.dc.send(new Uint8Array([SEND.MouseEnter])) }, this.onmouseleave = e => { "open" === this.dc.readyState && this.dc.send(new Uint8Array([SEND.MouseLeave])); for (let t = 1; t <= 16; t *= 2) e.buttons & t && this.emitMouseUp(MouseButtonsMask[t], 0, 0) } }
    emitMouseMove(e, t, n, s) { const o = this.normalize(e, t);
        n = 65536 * n / this.clientWidth, s = 65536 * s / this.clientHeight; const i = new DataView(new ArrayBuffer(9));
        i.setUint8(0, SEND.MouseMove), i.setUint16(1, o.x, !0), i.setUint16(3, o.y, !0), i.setInt16(5, n, !0), i.setInt16(7, s, !0), this.dc.send(i) }
    emitMouseDown(e, t, n) { const s = this.normalize(t, n),
            o = new DataView(new ArrayBuffer(6));
        o.setUint8(0, SEND.MouseDown), o.setUint8(1, e), o.setUint16(2, s.x, !0), o.setUint16(4, s.y, !0), this.dc.send(o) }
    emitMouseUp(e, t, n) { const s = this.normalize(t, n),
            o = new DataView(new ArrayBuffer(6));
        o.setUint8(0, SEND.MouseUp), o.setUint8(1, e), o.setUint16(2, s.x, !0), o.setUint16(4, s.y, !0), this.dc.send(o) }
    emitMouseWheel(e, t, n) { const s = this.normalize(t, n),
            o = new DataView(new ArrayBuffer(7));
        o.setUint8(0, SEND.MouseWheel), o.setInt16(1, e, !0), o.setUint16(3, s.x, !0), o.setUint16(5, s.y, !0), this.dc.send(o) }
    emitTouchData(e, t, n) { const s = new DataView(new ArrayBuffer(2 + 6 * t.length));
        s.setUint8(0, e), s.setUint8(1, t.length); let o = 2; for (const e of t) { const t = e.clientX - this.offsetLeft,
                i = e.clientY - this.offsetTop,
                a = this.normalize(t, i);
            s.setUint16(o, a.x, !0), o += 2, s.setUint16(o, a.y, !0), o += 2, s.setUint8(o, n[e.identifier], !0), o += 1, s.setUint8(o, 255 * e.force, !0), o += 1 }
        this.dc.send(s) }
    emitMessage(e, t = SEND.UIInteraction) { "string" != typeof e && (e = JSON.stringify(e)); const n = new DataView(new ArrayBuffer(3 + 2 * e.length)); let s = 0;
        n.setUint8(s, t), s++, n.setUint16(s, e.length, !0), s += 2; for (let t = 0; t < e.length; t++) n.setUint16(s, e.charCodeAt(t), !0), s += 2; return this.dc.send(n), new Promise((e => this.addEventListener("message", (t => e(t.detail)), { once: !0 }))) }
    normalize(e, t) { const n = e / this.clientWidth,
            s = t / this.clientHeight; return n < 0 || n > 1 || s < 0 || s > 1 ? { inRange: !1, x: 65535, y: 65535 } : { inRange: !0, x: 65536 * n, y: 65536 * s } } }
customElements.define("peer-stream", PeerStream, { extends: "video" });