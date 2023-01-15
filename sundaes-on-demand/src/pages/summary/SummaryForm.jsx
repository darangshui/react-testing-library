import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SummaryForm() {
  const [tcChecked, settcChecked] = useState(false);

  const checkboxLabel = (
      <span>
        I agree to <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </span>
  );

  return (
    <Form>
      <Form.Group controlId="Terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => settcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button varient="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
}

export default SummaryForm;