module.exports = function(RED) {

    "use strict";
    var mapeamentoNode;

    function getPhase3Node(config) {
        RED.nodes.createNode(this, config);
        // this.websocket = config.websocket;
        // this.websocketConfig = RED.nodes.getNode(this.websocket);
        var node = this
        // this.serial = config.serial;
        // this.serialConfig = RED.nodes.getNode(this.serial);
        // this.mapeamento = config.mapeamento
        // node.channel_number = config.channel_number
        // node.AC_mode = config.AC_mode === "true" ? true : false,
        // node.scale = config.scale
        // mapeamentoNode = RED.nodes.getNode(this.mapeamento);
        
        node.on('input', function(msg, send, done) {
            var globalContext = node.context().global;
            var exportMode = globalContext.get("exportMode");
            var currentMode = globalContext.get("currentMode");
            var command = {
                type: "multimeter_modular_V1.0",
                slot: 1,
                method: "get_phase_3",
                // channel_number: parseInt(node.channel_number),
                // AC_mode: node.AC_mode ,
                // scale: parseInt(node.scale) 
            }
            var file = globalContext.get("exportFile")
            var slot = globalContext.get("slot");
            if(currentMode == "test"){file.slots[slot].jig_test.push(command)}
            else{file.slots[slot].jig_error.push(command)}
            globalContext.set("exportFile", file);
            node.status({fill:"green", shape:"dot", text:"done"}); // seta o status pra waiting
            // msg.payload = command
            send(msg)
        });
    }
    RED.nodes.registerType("get-phase-3", getPhase3Node);

    // RED.httpAdmin.get("/getPhase3",function(req,res) {
    //     // console.log(mapeamentoNode)
    //     if(mapeamentoNode){
    //         res.json([
    //             {value:mapeamentoNode.valuePort1, label: mapeamentoNode.labelPort1, hasValue:false},
    //         ])
    //     }
    //     else{
    //         res.json([
    //             {label:"APW | IAPW || BPW | IBPW || CPW | ICPW", value: "0", hasValue:false},
    //         ])
    //     }
    // });
}