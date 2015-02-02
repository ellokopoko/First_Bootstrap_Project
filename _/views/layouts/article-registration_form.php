<article class='registrationform'>
  <h2>Registration form</h2>
  <p>
    We're not currently taking registrations for the Roux Academy Conference, but if you want to be placed into our mailing list for more information, please complete the form below.
  </p>
  <form class='registration form-horizontal' action='#'>
    <fieldset id='personalinfo'>
      <legend>Personal Info</legend>
      <div class='form-group'>
        <label class='col-sm-4 control-label' for='myname'>Name</label>
        <div class='col-sm-8'>
          <input class='form-control' id='myname' type='text' name='myname' autofocus required placeholder='Last, First'>
        </div>
      </div>
      <div class='form-group'>
        <label class='col-sm-4 control-label' for='companyname'>Company Name</label>
        <div class='col-sm-8'>
          <input class='form-control' id='companyname' type='text' name='companybname'>
        </div>
      </div>
      <div class='form-group'>
        <label class='col-sm-4 control-label' for='myemail'>Email</label>
        <div class='col-sm-8'>
          <input class='form-control' id='myemail' type='email' name='myemail' required autocomplete='off'>
        </div>
      </div>
    </fieldset>
    <fieldset id='otherinfo'>
      <legend>Other Info</legend>
      <div class='form-group'>
        <label class='col-sm-4 control-label'>Request Type</label>
        <div class='col-sm-8'>
          <label class='radio'>
            <input type='radio' name='requesttype' value='question'>Question</input>
          </label>
          <label class='radio'>
            <input type='radio' name='requesttype' value='comment'>Comment</input>
          </label>
        </div>
      </div>
      <div class='form-group'>
        <label class='radio col-sm-4 control-label'>Subscribe</label>
        <div class='col-sm-8'>
          <label class='checkbox'>
            <input id='subscribe' type='checkbox' CHECKED name='subscribe' value='yes'>
              Would you like to subscribe to our e-mail list?
          </label>
        </div>
      </div>
      <div class='form-group'>
        <label class='col-sm-4 control-label' for='reference'>How did you hear about the Roux Academy Conference?</label>
        <div class='col-sm-8'>
          <select class='form-control' id='reference' name='reference'>
            <option>Choose...</option>
            <option value='friend'>A friend</option>
            <option value='facebook'>Facebook</option>
            <option value='twitter'>Twitter</option>
          </select>
        </div>
      </div>
    </fieldset>
    <button class='btn btn-default' type='submit'>Submit</button>
  </form>
</article>
<!-- Registration Form ----------------------->