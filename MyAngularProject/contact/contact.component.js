angular.module('contact')
    .component('contact',{
        templateUrl: 'contact/contact.template.html',
        controller: function(){
            var self= this;
            self.formData= {};
            self.submitForm= function() {
                console.log('Form submitted:', self.formData);
                self.successMessage = "Form submitted successfully!";

            }
        }
    });
    