function MathViewModel()
{
    var self = this;
    
    self.content = ko.observable("");
    self.formula = ko.observable("")
    self.latex = ko.observable("");
    self.isInline = ko.observable(false);

    self.imageUrl = ko.observable("");

    self.getImageUrl = function()
    {
      var params = "";

      if (self.isInline())
      {
        params = params + "%5cinline%20";
      }

      params = params + self.latex();
      
      return "https://latex.codecogs.com/svg.latex?" + params;
    };

    self.previewFormula = function()
    {
      // get image from CodeCogs
      self.imageUrl(self.getImageUrl());
    };

    self.insertImage = function()
    {
      // insert image into document
    };

    self.init = function()
    {
      var formulaInput = document.getElementById("formula-input");

      var mathFieldHandlers =
      {
        edit: function()
        {
          self.latex(self.mathField.latex());
        }
      };
      
      self.mathField = MQ.MathField(formulaInput, { handlers: mathFieldHandlers });
    };

    self.init();
}
