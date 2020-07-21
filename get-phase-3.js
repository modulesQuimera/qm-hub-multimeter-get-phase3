module.exports = function(RED) {

    "use strict";
    var mapeamentoNode;

    function getPhase3Node(config) {
        RED.nodes.createNode(this, config);
        this.slot = config.slot;

        this.compare_selectA = config.compare_selectA;
        this.maxValueA = config.maxValueA;
        this.minValueA = config.minValueA;

        this.compare_selectB = config.compare_selectB;
        this.maxValueB = config.maxValueB;
        this.minValueB = config.minValueB;

        this.compare_selectC = config.compare_selectC;
        this.maxValueC = config.maxValueC;
        this.minValueC = config.minValueC;
        var node = this

        node.on('input', function(msg, send, done) {
            var _phaseA = {}
            var _phaseB = {}
            var _phaseC = {}
            if (node.compare_selectA == "interval") {
                _phaseA = {">=": parseFloat(node.minValueA), "<=": parseFloat(node.maxValueA)}
            }
            if (node.compare_selectA == "maxValue") {
                _phaseA = {">=": null, "<=": parseFloat(node.maxValueA)}
            }
            if (node.compare_selectA == "minValue") {
                _phaseA = {">=": parseFloat(node.minValueA), "<=": null}
            }
            
            if (node.compare_selectB == "interval") {
                _phaseB = {">=": parseFloat(node.minValueB), "<=": parseFloat(node.maxValueB)}
            }
            if (node.compare_selectB == "maxValue") {
                _phaseB = {">=": null, "<=": parseFloat(node.maxValueB)}
            }
            if (node.compare_selectB == "minValue") {
                _phaseB = {">=": parseFloat(node.minValueB), "<=": null}
            }
            
            if (node.compare_selectC == "interval") {
                _phaseC = {">=": parseFloat(node.minValueC), "<=": parseFloat(node.maxValueC)}
            }
            if (node.compare_selectC == "maxValue") {
                _phaseC = {">=": null, "<=": parseFloat(node.maxValueC)}
            }
            if (node.compare_selectC == "minValue") {
                _phaseC = {">=": parseFloat(node.minValueC), "<=": null}
            }
            var _compare = {
                phase_degrees_A: _phaseA,
                phase_degrees_B: _phaseB,
                phase_degrees_C: _phaseC,
            }

            var globalContext = node.context().global;
            var currentMode = globalContext.get("currentMode");
            var command = {
                type: "multimeter_modular_V1_0",
                slot: parseInt(node.slot),
                method: "get_phase_3",
                compare: _compare,
                get_output: {},
            }
            var file = globalContext.get("exportFile")
            var slot = globalContext.get("slot");
            if(!(slot === "begin" || slot === "end")){
                if(currentMode == "test"){
                    file.slots[slot].jig_test.push(command);
                }
                else{
                    file.slots[slot].jig_error.push(command);
                }
            }
            else{
                if(slot === "begin"){
                    file.slots[0].jig_test.push(command);
                    // file.begin.push(command);
                }
                else{
                    file.slots[3].jig_test.push(command);
                    // file.end.push(command);
                }
            }
            globalContext.set("exportFile", file);
            node.status({fill:"green", shape:"dot", text:"done"}); // seta o status pra waiting
            console.log(command)
            send(msg)
        });
    }
    RED.nodes.registerType("get-phase-3", getPhase3Node);

}