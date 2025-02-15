import React from 'react';

const templateInputFields = {
  1: [
    { label: 'First Name', name: 'firstName', type: 'text' },
    { label: 'Last Name', name: 'lastName', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Phone', name: 'phone', type: 'text' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'Summary', name: 'summary', type: 'textarea' },
    { label: 'Job Title', name: 'jobTitle', type: 'text' },
    { label: 'LinkedIn', name: 'linkedin', type: 'text' },
  ],
  2: [
    { label: 'First Name', name: 'firstName', type: 'text' },
    { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'Address', name: 'address', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Date', name: 'date', type: 'date' },
      { label: 'Letter Content', name: 'letterContent', type: 'textarea' },
    ],
  3: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
    ],
  4: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
    ],
  5: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Github', name: 'Github', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    6: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Github', name: 'Github', type: 'text' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    7: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Github', name: 'Github', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    8: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' },
      { label: 'Address', name: 'address', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' }, 
    ],
    9: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Address', name: 'address', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
    ],
    10: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'Address', name: 'address', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    11: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Github', name: 'Github', type: 'text' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    12: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Github', name: 'Github', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    13: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Github', name: 'Github', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    14: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Address', name: 'address', type: 'text' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    15: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Github', name: 'Github', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    16: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Address', name: 'address', type: 'text' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    17: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Job Title', name: 'jobTitle', type: 'text' },
      { label: 'Address', name: 'address', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
    18: [
      { label: 'First Name', name: 'firstName', type: 'text' },
      { label: 'Last Name', name: 'lastName', type: 'text' },
      { label: 'Phone', name: 'phone', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'LinkedIn', name: 'linkedin', type: 'text' },
      { label: 'Github', name: 'Github', type: 'text' },
      { label: 'Summary', name: 'summary', type: 'textarea' }
    ],
  };
  export { templateInputFields };