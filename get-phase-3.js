module.exports = function(RED) {

    // "use strict";
    var mapeamentoNode;

    function multipleGetPhase3(self, file, slot, currentMode){
        console.log("entoruuuu")
        for(var g=0; g<self.qtdGetPhase3; g++){
            var _phaseA_n = {};
            var _phaseB_n = {};
            var _phaseC_n = {};
            if (self.compare_selectA_n[g] == "interval") {
                _phaseA_n = {">=": parseFloat(self.minValueA_n[g]), "<=": parseFloat(self.maxValueA_n[g])};
            }
            if (self.compare_selectA_n[g] == "maxValue") {
                _phaseA_n = {">=": null, "<=": parseFloat(self.maxValueA_n[g])};
            }
            if (self.compare_selectA_n[g] == "minValue") {
                _phaseA_n = {">=": parseFloat(self.minValueA_n[g]), "<=": null};
            }
            
            if (self.compare_selectB_n[g] == "interval") {
                _phaseB_n = {">=": parseFloat(self.minValueB_n[g]), "<=": parseFloat(self.maxValueB_n[g])};
            }
            if (self.compare_selectB_n[g] == "maxValue") {
                _phaseB_n = {">=": null, "<=": parseFloat(self.maxValueB_n[g])};
            }
            if (self.compare_selectB_n[g] == "minValue") {
                _phaseB_n = {">=": parseFloat(self.minValueB_n[g]), "<=": null};
            }
            
            if (self.compare_selectC_n[g] == "interval") {
                _phaseC_n = {">=": parseFloat(self.minValueC_n[g]), "<=": parseFloat(self.maxValueC_n[g])};
            }
            if (self.compare_selectC_n[g] == "maxValue") {
                _phaseC_n = {">=": null, "<=": parseFloat(self.maxValueC_n[g])};
            }
            if (self.compare_selectC_n[g] == "minValue") {
                _phaseC_n = {">=": parseFloat(self.minValueC_n[g]), "<=": null};
            }
            var _compare_n = {
                phase_A: _phaseA_n,
                phase_B: _phaseB_n,
                phase_C: _phaseC_n,
            };
            var command_n = {
                type: "multimeter_modular_V1_0",
                slot: parseInt(self.slot),
                method: "get_phase_3",
                compare: _compare_n,
                get_output: {},
            };
            if(!(slot === "begin" || slot === "end")){
                if(currentMode == "test"){
                    file.slots[slot].jig_test.push(command_n);
                }
                else{
                    file.slots[slot].jig_error.push(command_n);
                }
            }
            
            else{
                if(slot === "begin"){
                    file.slots[0].jig_test.push(command_n);
                }
                else{
                    file.slots[3].jig_test.push(command_n);
                }
            }
        }
        return file;
    }


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

        this.qtdGetPhase3 = config.qtdGetPhase3;
        this.compare_selectA_n=[]; this.compare_selectB_n=[]; this.compare_selectC_n=[]; this.maxValueA_n=[]; this.minValueA_n=[]; this.maxValueB_n=[]; this.minValueB_n=[]; this.maxValueC_n=[]; this.minValueC_n=[];
        this.maxValueA_n.push(config.maxValueA1); this.minValueA_n.push(config.minValueA1); this.maxValueB_n.push(config.maxValueB1); this.minValueB_n.push(config.minValueB1); this.maxValueC_n.push(config.maxValueC1); this.minValueC_n.push(config.minValueC1);
        this.maxValueA_n.push(config.maxValueA2); this.minValueA_n.push(config.minValueA2); this.maxValueB_n.push(config.maxValueB2); this.minValueB_n.push(config.minValueB2); this.maxValueC_n.push(config.maxValueC2); this.minValueC_n.push(config.minValueC2);
        this.maxValueA_n.push(config.maxValueA3); this.minValueA_n.push(config.minValueA3); this.maxValueB_n.push(config.maxValueB3); this.minValueB_n.push(config.minValueB3); this.maxValueC_n.push(config.maxValueC3); this.minValueC_n.push(config.minValueC3);
        this.maxValueA_n.push(config.maxValueA4); this.minValueA_n.push(config.minValueA4); this.maxValueB_n.push(config.maxValueB4); this.minValueB_n.push(config.minValueB4); this.maxValueC_n.push(config.maxValueC4); this.minValueC_n.push(config.minValueC4);
        this.maxValueA_n.push(config.maxValueA5); this.minValueA_n.push(config.minValueA5); this.maxValueB_n.push(config.maxValueB5); this.minValueB_n.push(config.minValueB5); this.maxValueC_n.push(config.maxValueC5); this.minValueC_n.push(config.minValueC5);
        this.maxValueA_n.push(config.maxValueA6); this.minValueA_n.push(config.minValueA6); this.maxValueB_n.push(config.maxValueB6); this.minValueB_n.push(config.minValueB6); this.maxValueC_n.push(config.maxValueC6); this.minValueC_n.push(config.minValueC6);
        this.maxValueA_n.push(config.maxValueA7); this.minValueA_n.push(config.minValueA7); this.maxValueB_n.push(config.maxValueB7); this.minValueB_n.push(config.minValueB7); this.maxValueC_n.push(config.maxValueC7); this.minValueC_n.push(config.minValueC7);
        this.maxValueA_n.push(config.maxValueA8); this.minValueA_n.push(config.minValueA8); this.maxValueB_n.push(config.maxValueB8); this.minValueB_n.push(config.minValueB8); this.maxValueC_n.push(config.maxValueC8); this.minValueC_n.push(config.minValueC8);
        this.maxValueA_n.push(config.maxValueA9); this.minValueA_n.push(config.minValueA9); this.maxValueB_n.push(config.maxValueB9); this.minValueB_n.push(config.minValueB9); this.maxValueC_n.push(config.maxValueC9); this.minValueC_n.push(config.minValueC9);
        this.maxValueA_n.push(config.maxValueA10); this.minValueA_n.push(config.minValueA10); this.maxValueB_n.push(config.maxValueB10); this.minValueB_n.push(config.minValueB10); this.maxValueC_n.push(config.maxValueC10); this.minValueC_n.push(config.minValueC10);
        this.maxValueA_n.push(config.maxValueA11); this.minValueA_n.push(config.minValueA11); this.maxValueB_n.push(config.maxValueB11); this.minValueB_n.push(config.minValueB11); this.maxValueC_n.push(config.maxValueC11); this.minValueC_n.push(config.minValueC11);
        this.maxValueA_n.push(config.maxValueA12); this.minValueA_n.push(config.minValueA12); this.maxValueB_n.push(config.maxValueB12); this.minValueB_n.push(config.minValueB12); this.maxValueC_n.push(config.maxValueC12); this.minValueC_n.push(config.minValueC12);
        this.maxValueA_n.push(config.maxValueA13); this.minValueA_n.push(config.minValueA13); this.maxValueB_n.push(config.maxValueB13); this.minValueB_n.push(config.minValueB13); this.maxValueC_n.push(config.maxValueC13); this.minValueC_n.push(config.minValueC13);
        this.maxValueA_n.push(config.maxValueA14); this.minValueA_n.push(config.minValueA14); this.maxValueB_n.push(config.maxValueB14); this.minValueB_n.push(config.minValueB14); this.maxValueC_n.push(config.maxValueC14); this.minValueC_n.push(config.minValueC14);
        this.maxValueA_n.push(config.maxValueA15); this.minValueA_n.push(config.minValueA15); this.maxValueB_n.push(config.maxValueB15); this.minValueB_n.push(config.minValueB15); this.maxValueC_n.push(config.maxValueC15); this.minValueC_n.push(config.minValueC15);
        this.maxValueA_n.push(config.maxValueA16); this.minValueA_n.push(config.minValueA16); this.maxValueB_n.push(config.maxValueB16); this.minValueB_n.push(config.minValueB16); this.maxValueC_n.push(config.maxValueC16); this.minValueC_n.push(config.minValueC16);
        this.maxValueA_n.push(config.maxValueA17); this.minValueA_n.push(config.minValueA17); this.maxValueB_n.push(config.maxValueB17); this.minValueB_n.push(config.minValueB17); this.maxValueC_n.push(config.maxValueC17); this.minValueC_n.push(config.minValueC17);
        this.maxValueA_n.push(config.maxValueA18); this.minValueA_n.push(config.minValueA18); this.maxValueB_n.push(config.maxValueB18); this.minValueB_n.push(config.minValueB18); this.maxValueC_n.push(config.maxValueC18); this.minValueC_n.push(config.minValueC18);
        this.maxValueA_n.push(config.maxValueA19); this.minValueA_n.push(config.minValueA19); this.maxValueB_n.push(config.maxValueB19); this.minValueB_n.push(config.minValueB19); this.maxValueC_n.push(config.maxValueC19); this.minValueC_n.push(config.minValueC19);
        this.maxValueA_n.push(config.maxValueA20); this.minValueA_n.push(config.minValueA20); this.maxValueB_n.push(config.maxValueB20); this.minValueB_n.push(config.minValueB20); this.maxValueC_n.push(config.maxValueC20); this.minValueC_n.push(config.minValueC20);
        this.maxValueA_n.push(config.maxValueA21); this.minValueA_n.push(config.minValueA21); this.maxValueB_n.push(config.maxValueB21); this.minValueB_n.push(config.minValueB21); this.maxValueC_n.push(config.maxValueC21); this.minValueC_n.push(config.minValueC21);
        this.maxValueA_n.push(config.maxValueA22); this.minValueA_n.push(config.minValueA22); this.maxValueB_n.push(config.maxValueB22); this.minValueB_n.push(config.minValueB22); this.maxValueC_n.push(config.maxValueC22); this.minValueC_n.push(config.minValueC22);
        this.maxValueA_n.push(config.maxValueA23); this.minValueA_n.push(config.minValueA23); this.maxValueB_n.push(config.maxValueB23); this.minValueB_n.push(config.minValueB23); this.maxValueC_n.push(config.maxValueC23); this.minValueC_n.push(config.minValueC23);
        this.maxValueA_n.push(config.maxValueA24); this.minValueA_n.push(config.minValueA24); this.maxValueB_n.push(config.maxValueB24); this.minValueB_n.push(config.minValueB24); this.maxValueC_n.push(config.maxValueC24); this.minValueC_n.push(config.minValueC24);
  
        this.compare_selectA_n.push(config.compare_selectA1); this.compare_selectB_n.push(config.compare_selectB1);this.compare_selectC_n.push(config.compare_selectC1);
        this.compare_selectA_n.push(config.compare_selectA2); this.compare_selectB_n.push(config.compare_selectB2);this.compare_selectC_n.push(config.compare_selectC2);
        this.compare_selectA_n.push(config.compare_selectA3); this.compare_selectB_n.push(config.compare_selectB3);this.compare_selectC_n.push(config.compare_selectC3);
        this.compare_selectA_n.push(config.compare_selectA4); this.compare_selectB_n.push(config.compare_selectB4);this.compare_selectC_n.push(config.compare_selectC4);
        this.compare_selectA_n.push(config.compare_selectA5); this.compare_selectB_n.push(config.compare_selectB5);this.compare_selectC_n.push(config.compare_selectC5);
        this.compare_selectA_n.push(config.compare_selectA6); this.compare_selectB_n.push(config.compare_selectB6);this.compare_selectC_n.push(config.compare_selectC6);
        this.compare_selectA_n.push(config.compare_selectA7); this.compare_selectB_n.push(config.compare_selectB7);this.compare_selectC_n.push(config.compare_selectC7);
        this.compare_selectA_n.push(config.compare_selectA8); this.compare_selectB_n.push(config.compare_selectB8);this.compare_selectC_n.push(config.compare_selectC8);
        this.compare_selectA_n.push(config.compare_selectA9); this.compare_selectB_n.push(config.compare_selectB9);this.compare_selectC_n.push(config.compare_selectC9);
        this.compare_selectA_n.push(config.compare_selectA10);this.compare_selectB_n.push(config.compare_selectB10);this.compare_selectC_n.push(config.compare_selectC10);
        this.compare_selectA_n.push(config.compare_selectA11);this.compare_selectB_n.push(config.compare_selectB11);this.compare_selectC_n.push(config.compare_selectC11);
        this.compare_selectA_n.push(config.compare_selectA12);this.compare_selectB_n.push(config.compare_selectB12);this.compare_selectC_n.push(config.compare_selectC12);
        this.compare_selectA_n.push(config.compare_selectA13);this.compare_selectB_n.push(config.compare_selectB13);this.compare_selectC_n.push(config.compare_selectC13);
        this.compare_selectA_n.push(config.compare_selectA14);this.compare_selectB_n.push(config.compare_selectB14);this.compare_selectC_n.push(config.compare_selectC14);
        this.compare_selectA_n.push(config.compare_selectA15);this.compare_selectB_n.push(config.compare_selectB15);this.compare_selectC_n.push(config.compare_selectC15);
        this.compare_selectA_n.push(config.compare_selectA16);this.compare_selectB_n.push(config.compare_selectB16);this.compare_selectC_n.push(config.compare_selectC16);
        this.compare_selectA_n.push(config.compare_selectA17);this.compare_selectB_n.push(config.compare_selectB17);this.compare_selectC_n.push(config.compare_selectC17);
        this.compare_selectA_n.push(config.compare_selectA18);this.compare_selectB_n.push(config.compare_selectB18);this.compare_selectC_n.push(config.compare_selectC18);
        this.compare_selectA_n.push(config.compare_selectA19);this.compare_selectB_n.push(config.compare_selectB19);this.compare_selectC_n.push(config.compare_selectC19);
        this.compare_selectA_n.push(config.compare_selectA20);this.compare_selectB_n.push(config.compare_selectB20);this.compare_selectC_n.push(config.compare_selectC20);
        this.compare_selectA_n.push(config.compare_selectA21);this.compare_selectB_n.push(config.compare_selectB21);this.compare_selectC_n.push(config.compare_selectC21);
        this.compare_selectA_n.push(config.compare_selectA22);this.compare_selectB_n.push(config.compare_selectB22);this.compare_selectC_n.push(config.compare_selectC22);
        this.compare_selectA_n.push(config.compare_selectA23);this.compare_selectB_n.push(config.compare_selectB23);this.compare_selectC_n.push(config.compare_selectC23);
        this.compare_selectA_n.push(config.compare_selectA24);this.compare_selectB_n.push(config.compare_selectB24);this.compare_selectC_n.push(config.compare_selectC24);      

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
                    file = multipleGetPhase3(node, file, slot, currentMode);

                }
                else{
                    file.slots[slot].jig_error.push(command);
                    file = multipleGetPhase3(node, file, slot, currentMode);
                }
            }
            else{
                if(slot === "begin"){
                    file.slots[0].jig_test.push(command);
                    file = multipleGetPhase3(node, file, slot, currentMode);
                }
                else{
                    file.slots[3].jig_test.push(command);
                    file = multipleGetPhase3(node, file, slot, currentMode);
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