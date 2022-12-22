sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("es.victor.cero.controller.View1", {
            onInit: function () {


                // set i18n model on view
                var i18nModel = new ResourceModel({
                    bundleName: "es.victor.cero.i18n.i18n"
                });
                this.getView().setModel(i18nModel, "i18n");


                // set data model on view name recipient
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);


            },
            onShowHello: function () {
                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                // show message
                MessageToast.show(sMsg);
            }

        });
    });
