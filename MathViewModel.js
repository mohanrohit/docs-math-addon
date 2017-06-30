function MathViewModel()
{
    var self = this;
    
    self.content = ko.observable("");
    self.expression = ko.observable("")
    self.latex = ko.observable("");

    self.imageUrl = ko.observable("");

    self.getImageUrl = function()
    {
      return "https://latex.codecogs.com/png.latex?" + self.latex();
    };

    self.previewImage = function()
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
      var expressionInput = document.getElementById("formula");

      var mathFieldHandlers =
      {
        edit: function()
        {
          self.latex(self.mathField.latex());
        }
      };
      
      self.mathField = MQ.MathField(expressionInput, { handlers: mathFieldHandlers });
    };

    self.init();
}
