sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator'
], function (Controller, History,JSONModel,Filter,FilterOperator) {
	"use strict";
	return Controller.extend("es.victor.cero.controller.Detail", {
		onInit: function () {


			// set data model on view name recipient
			var oData2 = {
				unmodelo: {
					name: "Esto es un modelo"
				}
			};
			var oModel2 = new JSONModel(oData2);
			this.getView().setModel(oModel2, "modelo2");

	
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);

		},
		_onObjectMatched: function (oEvent) {

			var prueba = oEvent.getParameter("arguments").invoicePath;
			
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		}
	});
});