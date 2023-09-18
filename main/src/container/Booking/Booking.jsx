import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: Validate the form data

    // TODO: Send the booking request to the restaurant

    // Reset the form
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setPartySize('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="time">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="partySize">
        <Form.Label>Party size</Form.Label>
        <Form.Control
          type="number"
          value={partySize}
          onChange={(event) => setPartySize(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Book now
      </Button>
    </Form>
  );
};

export default Booking;
