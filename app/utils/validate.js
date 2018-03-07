
export function isEmpty(str) {
    return (!str || 0 === str.length);
}

export function validateEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (filter.test(email)) return true;

    return false;
}

export function validate(form) {
    let error = {};
    let success = true;

    var keys = Object.keys(form);
    var length = keys.length;

    keys.slice(0, length).map(field => {
        if (field !== "error"){
            var { type, value } = form[field];
            if (isEmpty(value)){
                error[field] = 'Your ' + field + ' is required';
                success = false;
            }else{
                error[field] = '';

                if (type === "email" && !validateEmail(value)) {
                    error[field] = 'Enter a valid email address';
                    success = false;
                }
            }
        }
    });

    return {success, error};
}