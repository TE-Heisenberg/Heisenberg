customInputComponentApp.
  component('textBox',{
    templateUrl: './subCustomComponents/text/nativeContent.html',
    controller: TextBoxCtrl,
    controllerAs: "TextBoxCtrl"
    ,
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&',
      required: '@',
      ngHint: '@',
      ngPattern: '@'
    }
  });

function TextBoxCtrl()
{
    var ctrl = this;
    console.log("Inside controller of textBoxCtrl");
    console.log(this);
    this.reflectValue = function(value) {
      console.log(value);
      this.reflectComponent({value:value});

    };
}
