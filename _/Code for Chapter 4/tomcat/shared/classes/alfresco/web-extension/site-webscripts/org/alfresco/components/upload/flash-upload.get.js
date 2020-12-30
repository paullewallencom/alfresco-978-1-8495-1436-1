/**
 * Custom content types
 */
function getContentTypes()
{
   // TODO: Data webscript call to return list of available types
   var contentTypes = [
   {
      id: "cm:content",
      value: "type.cm_content"
   },
   {
      id: "tc:supplierInvoice",
      value: "type.tc_invoice"
   },
   {
      id: "tc:expenseReport",
      value: "type.tc_expense"
   }
   
   ];

   return contentTypes;
}

model.contentTypes = getContentTypes();