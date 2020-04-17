import React from 'react';

function SignUpPage() {
    return (
        <div>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate"/>
                                <label for="email">Name</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate"/>
                                <label for="email">Email</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                        <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate"/>
                                <label for="email">Password</label>
                                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;