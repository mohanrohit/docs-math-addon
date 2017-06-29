function MathViewModel()
{
    var self = this;
    
    self.content = ko.observable("");
    self.expression = ko.observable("")
    self.latex = ko.observable("");

    self.generateLatex = function()
    {
      return self.latex();
    };

    self.init = function()
    {
      var expressionInput = document.getElementById("math-expression");

      var mathFieldHandlers =
      {
        edit: function()
        {
          self.latex(self.mathField.latex());
        }
      };
      
      self.mathField = MQ.MathField(expressionInput, { handlers: mathFieldHandlers });

      // self.latex = ko.computed(function() {
        // return self.mathField.latex();
      // });
    };

    self.init();
}
