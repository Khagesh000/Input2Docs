import React, { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import html2pdf from 'html2pdf.js';
import '../Letter.css';

const letterTemplates = {
  "Permission Letters": {
    "Field Trip Permission Letter": {
      template: `
       {YourName}
       {YourAddress}
       {City}, {State}, {ZIPCode}
       {CurrentDate}

       {RecipientsName}
       {SchoolsName}
       {SchoolsAddress}
       {City}, {State}, {ZIPCode}

       Dear {RecipientsName},

         I am writing to request permission for my child, {ChildsName}, to attend the upcoming field trip 
         to {Destination} on {TripDate}. This trip presents a valuable educational opportunity,
         and I believe it will greatly enrich my child's learning experience.
        

        I assure you that all necessary preparations have been  made to ensure my child's safety and 
        well-being during  this trip.
        I am confident that this experience will be both educational and enjoyable.
        

            Thank you for considering my request. I look forward to your positive response.
            

      Sincerely,
      {YourName}
      {YourContactNumber}

      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientsName", "label": "Recipient's Name", "type": "text" },
        { "id": "SchoolsName", "label": "School's Name", "type": "text" },
        { "id": "SchoolsAddress", "label": "School's Address", "type": "text" },
        { "id": "ChildsName", "label": "Child's Name", "type": "text" },
        { "id": "Destination", "label": "Destination", "type": "quill" },
        { "id": "TripDate", "label": "Trip Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
      ]
      
    },

    "Medical Treatment Permission": {
      template : `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {DoctorName}
      {HospitalName}
      {HospitalAddress}
      {City}, {State}, {ZIPCode}

      Dear {DoctorName},

     I am writing to grant permission for my child, {ChildName}, to receive the necessary medical 
     treatment at {HospitalName}. 
     My child has been diagnosed with {MedicalCondition}, and I understand the importance of timely 
     and appropriate medical care.
     Please proceed with the recommended treatment and keep me informed of my child's progress. 
     If there are any additional procedures or decisions required, do not hesitate to 
     contact me at {YourContactNumber}.

           Thank you for your attention and care.

          Sincerely,
          {YourName}
          {YourContactNumber}

      `,
      fields : [
        
          { "id": "YourName", "label": "Your Name", "type": "text" },
          { "id": "YourAddress", "label": "Your Address", "type": "text" },
          { "id": "City", "label": "City", "type": "text" },
          { "id": "State", "label": "State", "type": "text" },
          { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
          { "id": "CurrentDate", "label": "Current Date", "type": "date" },
          { "id": "DoctorName", "label": "Doctor's Name", "type": "text" },
          { "id": "HospitalName", "label": "Hospital's Name", "type": "text" },
          { "id": "HospitalAddress", "label": "Hospital's Address", "type": "text" },
          { "id": "ChildName", "label": "Child's Name", "type": "text" },
          { "id": "MedicalCondition", "label": "Medical Condition", "type": "text" },
          { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
        ]
        
      
    },

    "Overnight Stay Permission": {
      template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientsName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientsName},

      I am writing to grant permission for my child, {ChildName}, to stay overnight at 
      your home on {OvernightDate}. 
      I trust that my child will be in a safe and responsible environment under your supervision.

      Please ensure that my child follows any necessary guidelines and curfews. If any issues arise, 
      feel free to contact me at {YourContactNumber}.

      Thank you for your understanding and cooperation.

      Sincerely,
      {YourName}
      {YourContactNumber}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientsName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "OvernightDate", "label": "Overnight Date", "type": "date" },
        { "id": "ChildName", "label": "Child's Name", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
      ]
    },

    "Travel Permission Letter": {
      template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientsName}
      {TravelAgencyName}
      {TravelAgencyAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientsName},

      I am writing to grant permission for my child, {ChildName}, to travel to {Destination} 
      from {TravelStartDate} to {TravelEndDate}.My child will be under the supervision 
      of {SupervisorName},and I trust that all necessary precautions will be taken to 
      ensure their safety.
       

      Please keep me informed of any changes to the travel itinerary. If you need to contact me, 
      I can be reached at {YourContactNumber}.

      Thank you for your attention to this matter.

      Sincerely,
      {YourName}
      {YourContactNumber}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientsName", "label": "Recipient's Name", "type": "text" },
        { "id": "TravelAgencyName", "label": "Travel Agency's Name", "type": "text" },
        { "id": "TravelAgencyAddress", "label": "Travel Agency's Address", "type": "text" },
        { "id": "Destination", "label": "Destination", "type": "text" },
        { "id": "TravelStartDate", "label": "Travel Start Date", "type": "date" },
        { "id": "TravelEndDate", "label": "Travel End Date", "type": "date" },
        { "id": "SupervisorName", "label": "Supervisor's Name", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
      ]
    },
   
    "Parental Consent for Minor's":{
      template: `
  {YourName}
  {YourAddress}
  {City}, {State}, {ZIPCode}
  {CurrentDate}

  {EmployerName}
  {CompanyName}
  {CompanyAddress}
  {City}, {State}, {ZIPCode}

  Dear {EmployerName},

    I am writing to provide my consent for my child, {ChildsName}, to work at {CompanyName} 
    as a {JobTitle}.I understand the nature of the work and the hours my child 
    will be expected to work.
     
    I am confident that the work environment is safe and that my child will be treated fairly.

    Please find enclosed a copy of {ChildsName}'s birth certificate and any other 
    necessary documents to confirm their eligibility for employment.
     

    Should you require any additional information or documentation, 
    please feel free to contact me at {YourContactNumber}.

    Thank you for your attention to this matter.

  Sincerely,
  {YourName}
  {YourContactNumber}
  `,
  fields: [
    { "id": "YourName", "label": "Your Name", "type": "text" },
    { "id": "YourAddress", "label": "Your Address", "type": "text" },
    { "id": "City", "label": "City", "type": "text" },
    { "id": "State", "label": "State", "type": "text" },
    { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
    { "id": "CurrentDate", "label": "Current Date", "type": "date" },
    { "id": "EmployerName", "label": "Employer's Name", "type": "text" },
    { "id": "CompanyName", "label": "Company's Name", "type": "text" },
    { "id": "CompanyAddress", "label": "Company's Address", "type": "text" },
    { "id": "ChildsName", "label": "Child's Name", "type": "text" },
    { "id": "JobTitle", "label": "Job Title", "type": "text" },
    { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
  ]
    },
    
    "Permission to Use Property" : {
      template : `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to grant permission for the use of my property located at {PropertyAddress} 
      for {Purpose} on {Date}.The property may be used from {StartTime} to {EndTime}. 
       

      Please ensure that the property is returned to its original condition after use. 
      If you have any questions or need further details, do not hesitate to contact 
      me at {YourContactNumber}.

      

                  Thank you for your cooperation.

         Sincerely,
        {YourName}
        {YourContactNumber}

      `,
      fields:[
        { id: 'YourName', label: "Your Name", type: "text" },
        { id: 'YourAddress', label: "Your Address", type: "text" },
        { id: 'City', label: "City", type: "text" },
        { id: 'State', label: "State", type: "text" },
        { id: 'ZIPCode', label: "ZIP Code", type: "text" },
        { id: 'CurrentDate', label: "Current Date", type: "date" },
        { id: 'RecipientName', label: "Recipient's Name", type: "text" },
        { id: 'RecipientAddress', label: "Recipient's Address", type: "text" },
        { id: 'PropertyAddress', label: "Property Address", type: "text" },
        { id: 'Purpose', label: "Purpose", type: "text" },
        { id: 'Date', label: "Date", type: "date" },
        { id: 'StartTime', label: "Start Time", type: "time" },
        { id: 'EndTime', label: "End Time", type: "time" },
        { id: 'YourContactNumber', label: "Your Contact Number", type: "text" }
      ]
    },

    "Parental Permission for School":{
      template: `
       {YourName}
       {YourAddress}
       {City}, {State}, {ZIPCode}
       {CurrentDate}

       {SchoolPrincipalName}
       {SchoolName}
       {SchoolAddress}
       {City}, {State}, {ZIPCode}

        Dear {SchoolPrincipalName},

         I am writing to give permission for my child, {ChildName}, to participate in the school activity
          {ActivityName} scheduled for {ActivityDate}. 
         I understand the details of the activity and the arrangements made for my child's safety.

         If there are any additional forms or information required, please let me know. 
         You can reach me at {YourContactNumber}.

           Thank you for organizing this activity and for your attention to my child's participation.

         Sincerely,
         {YourName}
        {YourContactNumber}

      `,
      fields:[
        { id: 'YourName', label: "Your Name", type: "text" },
  { id: 'YourAddress', label: "Your Address", type: "text" },
  { id: 'City', label: "City", type: "text" },
  { id: 'State', label: "State", type: "text" },
  { id: 'ZIPCode', label: "ZIP Code", type: "text" },
  { id: 'CurrentDate', label: "Current Date", type: "date" },
  { id: 'SchoolPrincipalName', label: "School Principal's Name", type: "text" },
  { id: 'SchoolName', label: "School Name", type: "text" },
  { id: 'SchoolAddress', label: "School Address", type: "text" },
  { id: 'ChildName', label: "Child's Name", type: "text" },
  { id: 'ActivityName', label: "Activity Name", type: "text" },
  { id: 'ActivityDate', label: "Activity Date", type: "date" },
  { id: 'YourContactNumber', label: "Your Contact Number", type: "text" }
      ]
    }

  },
  "Excuse Letters": {
    "Absentee Excuse Letter": {
      template: `
        {YourName}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {RecipientsName}
        {CompanyName}
        {CompanyAddress}
        {City}, {State}, {ZIPCode}

        Dear {RecipientsName},

           I am writing to inform you that I was unable to attend work on {AbsenceDate} due to {Reason}. 
           I understand the significance of my responsibilities and have taken the necessary steps to ensure 
           that my absence did not hinder the workflow.

           I appreciate your understanding and support during this time. 
           I will make every effort to catch up on any missed work and fulfill my duties promptly upon my return.

                   Thank you for your consideration.

           Sincerely,
          {YourName}
          {YourContactNumber}

      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientsName", "label": "Recipient's Name", "type": "text" },
        { "id": "CompanyName", "label": "Company's Name", "type": "text" },
        { "id": "CompanyAddress", "label": "Company's Address", "type": "text" },
        { "id": "AbsenceDate", "label": "Absence Date", "type": "date" },
        { "id": "Reason", "label": "Reason for Absence", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
      ]
      
    },
    "Late Arrival Excuse Letter": {
      template: `
        {YourName}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

       {RecipientName}
       {CompanyName}
       {CompanyAddress}
       {City}, {State}, {ZIPCode}

       Dear {RecipientName},

       I am writing to apologize for my late arrival at work on {ArrivalDate}. 
       The delay was caused by {ReasonForLateArrival}.

       I understand the importance of punctuality and will ensure this does not happen again. 
       Please let me know if there are any concerns or if further information is needed.

             Thank you for your understanding.

        Sincerely,
       {YourName}
       {YourContactNumber}

      `,
      fields: [
        { id: 'YourName', label: "Your Name", type: "text" },
        { id: 'YourAddress', label: "Your Address", type: "text" },
        { id: 'City', label: "City", type: "text" },
        { id: 'State', label: "State", type: "text" },
        { id: 'ZIPCode', label: "ZIP Code", type: "text" },
        { id: 'CurrentDate', label: "Current Date", type: "date" },
        { id: 'RecipientName', label: "Recipient's Name", type: "text" },
        { id: 'CompanyName', label: "Company Name", type: "text" },
        { id: 'CompanyAddress', label: "Company Address", type: "text" },
        { id: 'ArrivalDate', label: "Date of Arrival", type: "date" },
        { id: 'ReasonForLateArrival', label: "Reason for Late Arrival", type: "text" },
        { id: 'YourContactNumber', label: "Your Contact Number", type: "text" }
      ]
    },
    "Sick Leave Excuse Letter":{
      template:`
          {YourName}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}

          {RecipientName}
          {CompanyName}
          {CompanyAddress}
          {City}, {State}, {ZIPCode}

          Dear {RecipientName},

          I am writing to inform you that I am unable to attend work due to illness. I have been 
          feeling unwell and have consulted with my doctor, who has advised me to rest and recover at home.

          I anticipate returning to work on {ReturnDate}. During my absence, 
          I will make sure to stay in touch and provide any necessary updates. 
          Please let me know if there are any urgent matters that require my attention.

                    Thank you for your understanding.

            Sincerely,
            {YourName}
           {YourContactNumber}

      `,
      fields:[
        { id: 'YourName', label: "Your Name", type: "text" },
        { id: 'YourAddress', label: "Your Address", type: "text" },
        { id: 'City', label: "City", type: "text" },
        { id: 'State', label: "State", type: "text" },
        { id: 'ZIPCode', label: "ZIP Code", type: "text" },
        { id: 'CurrentDate', label: "Current Date", type: "date" },
        { id: 'RecipientName', label: "Recipient's Name", type: "text" },
        { id: 'CompanyName', label: "Company Name", type: "text" },
        { id: 'CompanyAddress', label: "Company Address", type: "text" },
        { id: 'ReturnDate', label: "Return Date", type: "date" },
        { id: 'YourContactNumber', label: "Your Contact Number", type: "text" }
      ]
    },

    "Personal Emergency Excuse Letter":{
      template:`
         {YourName}
         {YourAddress}
         {City}, {State}, {ZIPCode}
         {CurrentDate}

         {RecipientName}
         {CompanyName}
         {CompanyAddress}
         {City}, {State}, {ZIPCode}

            Dear {RecipientName},

             I am writing to inform you that I am unable to come to work due to a personal emergency. 
             The situation requires my immediate attention and I will be out for {NumberOfDays} days.

             I apologize for any inconvenience this may cause and will keep you updated on my status. 
             Please let me know if there are any urgent issues that need my attention.

                   Thank you for your understanding.

                  Sincerely,
                  {YourName}
                  {YourContactNumber}

      `,
      fields:[
        { id: 'YourName', label: "Your Name", type: "text" },
        { id: 'YourAddress', label: "Your Address", type: "text" },
        { id: 'City', label: "City", type: "text" },
        { id: 'State', label: "State", type: "text" },
        { id: 'ZIPCode', label: "ZIP Code", type: "text" },
        { id: 'CurrentDate', label: "Current Date", type: "date" },
        { id: 'RecipientName', label: "Recipient's Name", type: "text" },
        { id: 'CompanyName', label: "Company Name", type: "text" },
        { id: 'CompanyAddress', label: "Company Address", type: "text" },
        { id: 'NumberOfDays', label: "Number of Days", type: "number" },
        { id: 'YourContactNumber', label: "Your Contact Number", type: "text" }
      ]
    },

    "Family Emergency Excuse Letter":{
      template:`
        {YourName}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {RecipientName}
        {CompanyName}
        {CompanyAddress}
        {City}, {State}, {ZIPCode}

        Dear {RecipientName},

          I am writing to inform you that I am dealing with a family emergency 
          and will be unable to attend work on {AbsentDate}. 

          I am addressing the situation and will provide updates as soon as possible. 
          I apologize for any inconvenience caused and appreciate your understanding during this time.

                    Thank you.

           Sincerely,
          {YourName}
          {YourContactNumber}

      `,
      fields:[
        { id: 'YourName', label: "Your Name", type: "text" },
        { id: 'YourAddress', label: "Your Address", type: "text" },
        { id: 'City', label: "City", type: "text" },
        { id: 'State', label: "State", type: "text" },
        { id: 'ZIPCode', label: "ZIP Code", type: "text" },
        { id: 'CurrentDate', label: "Current Date", type: "date" },
        { id: 'RecipientName', label: "Recipient's Name", type: "text" },
        { id: 'CompanyName', label: "Company Name", type: "text" },
        { id: 'CompanyAddress', label: "Company Address", type: "text" },
        { id: 'AbsentDate', label: "Absent Date", type: "date" },
        { id: 'YourContactNumber', label: "Your Contact Number", type: "text" }
      ]
    },

    "Jury Duty Excuse Letter":{
      template:`
         {YourName}
         {YourAddress}
         {City}, {State}, {ZIPCode}
         {CurrentDate}

         {RecipientName}
         {CompanyName}
         {CompanyAddress}
         {City}, {State}, {ZIPCode}

         Dear {RecipientName},

         I am writing to inform you that I have been summoned for jury duty and will
          be unable to attend work on {JuryDutyDate}. This is a civic obligation that I must fulfill.

         I will provide any necessary documentation upon my return. 
         Please let me know if there are any urgent matters I should address before my leave.

            Thank you for your understanding.

             Sincerely,
             {YourName}
           {YourContactNumber}

      `,
      fields:[
        { id: 'YourName', label: "Your Name", type: "text" },
        { id: 'YourAddress', label: "Your Address", type: "text" },
        { id: 'City', label: "City", type: "text" },
        { id: 'State', label: "State", type: "text" },
        { id: 'ZIPCode', label: "ZIP Code", type: "text" },
        { id: 'CurrentDate', label: "Current Date", type: "date" },
        { id: 'RecipientName', label: "Recipient's Name", type: "text" },
        { id: 'CompanyName', label: "Company Name", type: "text" },
        { id: 'CompanyAddress', label: "Company Address", type: "text" },
        { id: 'JuryDutyDate', label: "Jury Duty Date", type: "date" },
        { id: 'YourContactNumber', label: "Your Contact Number", type: "text" }
      
      ]
    },
    "Medical Appointment Excuse Letter":{
      template:`
        {YourName}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {RecipientName}
        {CompanyName}
        {CompanyAddress}
        {City}, {State}, {ZIPCode}

        Dear {RecipientName},

        I am writing to inform you that I have a medical appointment scheduled 
        for {AppointmentDate} and will be unable to attend work on that day. 
        This appointment is important for my health and well-being.

        I will ensure that any pending tasks are handled before my absence. 
        If needed, I am available by phone for urgent matters.

               Thank you for your understanding.

        Sincerely,
        {YourName}
        {YourContactNumber}

      `,
      fields:[
        { id: 'YourName', label: "Your Name", type: "text" },
        { id: 'YourAddress', label: "Your Address", type: "text" },
        { id: 'City', label: "City", type: "text" },
        { id: 'State', label: "State", type: "text" },
        { id: 'ZIPCode', label: "ZIP Code", type: "text" },
        { id: 'CurrentDate', label: "Current Date", type: "date" },
        { id: 'RecipientName', label: "Recipient's Name", type: "text" },
        { id: 'CompanyName', label: "Company Name", type: "text" },
        { id: 'CompanyAddress', label: "Company Address", type: "text" },
        { id: 'AppointmentDate', label: "Appointment Date", type: "date" },
        { id: 'YourContactNumber', label: "Your Contact Number", type: "text" }
      ]
    }
  },
  "Communication Letters":{
      "Job Application": {
      template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {CompanyName}
      {CompanyAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to express my interest in the {JobTitle} position 
      at {CompanyName}. With my background in {YourField} and {NumberOfYears} 
      years of experience, I am confident in my ability to contribute effectively to your team.

      Please find my resume attached for your review. I am looking forward to the opportunity 
      to discuss how my skills and experiences align with the needs of your organization. 
             Thank you for considering my application.

         Sincerely,
         {YourName}
         {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "CompanyName", "label": "Company Name", "type": "text" },
      { "id": "CompanyAddress", "label": "Company Address", "type": "text" },
      { "id": "JobTitle", "label": "Job Title", "type": "text" },
      { "id": "YourField", "label": "Your Field", "type": "text" },
      { "id": "NumberOfYears", "label": "Number of Years", "type": "number" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Follow-Up After Meeting": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {CompanyName}
      {CompanyAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I wanted to follow up on our recent meeting on {MeetingDate} regarding {MeetingTopic}. 
      I appreciate the opportunity to discuss {KeyPointsDiscussed}.

      If you need any additional information or have any further questions, 
      please do not hesitate to contact me.

               Thank you once again for your time.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "CompanyName", "label": "Company Name", "type": "text" },
      { "id": "CompanyAddress", "label": "Company Address", "type": "text" },
      { "id": "MeetingDate", "label": "Meeting Date", "type": "date" },
      { "id": "MeetingTopic", "label": "Meeting Topic", "type": "text" },
      { "id": "KeyPointsDiscussed", "label": "Key Points Discussed", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Complaint About Service": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {CompanyName}
      {CompanyAddress}
      {City}, {State}, {ZIPCode}

      Dear {CompanyName},

      I am writing to formally complain about the service I received on {ServiceDate}. 
      The issue I encountered was {IssueDescription}.

      I would appreciate it if you could address this matter promptly. 
      Please let me know how this will be resolved. If you need any additional information, 
      feel free to contact me at {YourContactNumber}.

             Thank you for your attention to this matter.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "CompanyName", "label": "Company Name", "type": "text" },
      { "id": "CompanyAddress", "label": "Company Address", "type": "text" },
      { "id": "ServiceDate", "label": "Service Date", "type": "date" },
      { "id": "IssueDescription", "label": "Issue Description", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Request for Meeting": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {CompanyName}
      {CompanyAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to request a meeting with you to discuss {MeetingTopic}. 
      I am available on {AvailableDates} and would appreciate it if we could arrange a suitable time.

      Please let me know your availability. I look forward to your response.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "CompanyName", "label": "Company Name", "type": "text" },
      { "id": "CompanyAddress", "label": "Company Address", "type": "text" },
      { "id": "MeetingTopic", "label": "Meeting Topic", "type": "text" },
      { "id": "AvailableDates", "label": "Available Dates", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Apology for Mistake": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to apologize for {DescriptionOfMistake}. I realize that this mistake has 
      caused {Consequences} and I sincerely regret any inconvenience it may have caused.

      Please accept my apologies, and I assure you that measures will be taken to prevent such 
      mistakes in the future. If you have any further concerns or need additional information, 
      please contact me at {YourContactNumber}.

              Thank you for your understanding.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "DescriptionOfMistake", "label": "Description of Mistake", "type": "text" },
      { "id": "Consequences", "label": "Consequences", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Notification of Change of Address": {
    template: `
      {YourName}
      {OldAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {CompanyName}
      {CompanyAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to inform you of my change of address. 
      Please update your records with my new address as follows:
       

      {NewAddress}
      {City}, {State}, {ZIPCode}

      This change will be effective from {EffectiveDate}. If you need any further 
      information or documentation, please contact me at {YourContactNumber}.

          Thank you for your attention to this matter.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "OldAddress", "label": "Old Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "CompanyName", "label": "Company Name", "type": "text" },
      { "id": "CompanyAddress", "label": "Company Address", "type": "text" },
      { "id": "NewAddress", "label": "New Address", "type": "text" },
      { "id": "EffectiveDate", "label": "Effective Date", "type": "date" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Resignation Letter": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {CompanyName}
      {CompanyAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to formally resign from my position as {YourJobTitle} at {CompanyName}, 
      effective {LastWorkingDay}.

      I have appreciated the opportunity to work with {CompanyName} and I am grateful for 
      the support and guidance during my tenure. Please let me know if there are any specific 
      tasks or documentation required from me during the transition period.

                Thank you for your understanding.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "CompanyName", "label": "Company Name", "type": "text" },
      { "id": "CompanyAddress", "label": "Company Address", "type": "text" },
      { "id": "YourJobTitle", "label": "Your Job Title", "type": "text" },
      { "id": "LastWorkingDay", "label": "Last Working Day", "type": "date" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  },

   "Enrollment Letters":{
    "Application for Admission": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {SchoolName}
      {SchoolAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to apply for admission to the {ProgramName} program at {SchoolName} for 
      the {AcademicYear}. I am particularly interested in this program because {ReasonForInterest}.

      Enclosed are my application form, academic transcripts, and other required documents.
      I am looking forward to the opportunity to contribute to and learn from your esteemed institution.

            Thank you for considering my application.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "SchoolName", "label": "School Name", "type": "text" },
      { "id": "SchoolAddress", "label": "School Address", "type": "text" },
      { "id": "ProgramName", "label": "Program Name", "type": "text" },
      { "id": "AcademicYear", "label": "Academic Year", "type": "text" },
      { "id": "ReasonForInterest", "label": "Reason for Interest", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Confirmation of Enrollment": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {SchoolName}
      {SchoolAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to confirm my enrollment in the {ProgramName} program at {SchoolName} 
      for the {AcademicYear}. I am excited to begin my studies and appreciate the opportunity 
      to be part of your institution.

      Please let me know if there are any additional steps required on my part before 
      the start of the program.

      Thank you.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "SchoolName", "label": "School Name", "type": "text" },
      { "id": "SchoolAddress", "label": "School Address", "type": "text" },
      { "id": "ProgramName", "label": "Program Name", "type": "text" },
      { "id": "AcademicYear", "label": "Academic Year", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Request for Enrollment Deferral": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {SchoolName}
      {SchoolAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to request a deferral of my enrollment in the {ProgramName} program 
      at {SchoolName} from {CurrentEnrollmentTerm} to {RequestedTerm}. Due to {ReasonForDeferral}, 
      I am unable to begin my studies as planned.

      I appreciate your consideration of my request and look forward to starting the program at 
      a later date.

               Thank you for your understanding.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "SchoolName", "label": "School Name", "type": "text" },
      { "id": "SchoolAddress", "label": "School Address", "type": "text" },
      { "id": "ProgramName", "label": "Program Name", "type": "text" },
      { "id": "CurrentEnrollmentTerm", "label": "Current Enrollment Term", "type": "text" },
      { "id": "RequestedTerm", "label": "Requested Term", "type": "text" },
      { "id": "ReasonForDeferral", "label": "Reason for Deferral", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Request for Transcript": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {SchoolName}
      {SchoolAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am requesting a copy of my official transcript from {SchoolName} for the purpose of {Purpose}. 
      My student ID is {StudentID}.

      Please send the transcript to {RecipientAddress} or email it to {RecipientEmail}. 
      If you require any additional information or documentation, please let me know.

             Thank you for your assistance.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "SchoolName", "label": "School Name", "type": "text" },
      { "id": "SchoolAddress", "label": "School Address", "type": "text" },
      { "id": "Purpose", "label": "Purpose", "type": "text" },
      { "id": "StudentID", "label": "Student ID", "type": "text" },
      { "id": "RecipientAddress", "label": "Recipient Address", "type": "text" },
      { "id": "RecipientEmail", "label": "Recipient Email", "type": "email" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Request for Enrollment Verification": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {SchoolName}
      {SchoolAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am requesting verification of my enrollment status at {SchoolName} for the {CurrentTerm}. 
      This verification is required for {Purpose}.

      Please confirm my enrollment status and send the verification to {RecipientAddress} or email 
      it to {RecipientEmail}.

              Thank you for your assistance.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "SchoolName", "label": "School Name", "type": "text" },
      { "id": "SchoolAddress", "label": "School Address", "type": "text" },
      { "id": "CurrentTerm", "label": "Current Term", "type": "text" },
      { "id": "Purpose", "label": "Purpose", "type": "text" },
      { "id": "RecipientAddress", "label": "Recipient Address", "type": "text" },
      { "id": "RecipientEmail", "label": "Recipient Email", "type": "email" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Notification of Withdrawal": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {SchoolName}
      {SchoolAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to formally notify you of my withdrawal from the {ProgramName} 
      program at {SchoolName} effective {WithdrawalDate}. Due to {ReasonForWithdrawal}, 
      I will be unable to continue with my studies.

      Please advise on any required procedures to complete my withdrawal process.

      Thank you for your attention to this matter.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "SchoolName", "label": "School Name", "type": "text" },
      { "id": "SchoolAddress", "label": "School Address", "type": "text" },
      { "id": "ProgramName", "label": "Program Name", "type": "text" },
      { "id": "WithdrawalDate", "label": "Withdrawal Date", "type": "date" },
      { "id": "ReasonForWithdrawal", "label": "Reason for Withdrawal", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  },

  "Request for Enrollment Confirmation": {
    template: `
      {YourName}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientTitle}
      {SchoolName}
      {SchoolAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am writing to request confirmation of my enrollment in the {ProgramName} program 
      at {SchoolName} for the {AcademicYear}. This confirmation is required for {Purpose}.

      Please provide written confirmation of my enrollment status and send it to {RecipientAddress} or 
      email it to {RecipientEmail}.

                Thank you for your assistance.

      Sincerely,
      {YourName}
      {YourContactNumber}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientTitle", "label": "Recipient's Title", "type": "text" },
      { "id": "SchoolName", "label": "School Name", "type": "text" },
      { "id": "SchoolAddress", "label": "School Address", "type": "text" },
      { "id": "ProgramName", "label": "Program Name", "type": "text" },
      { "id": "AcademicYear", "label": "Academic Year", "type": "text" },
      { "id": "Purpose", "label": "Purpose", "type": "text" },
      { "id": "RecipientAddress", "label": "Recipient Address", "type": "text" },
      { "id": "RecipientEmail", "label": "Recipient Email", "type": "email" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" }
    ]
  }
  },

  "Fundraising Letters": {
    "Charity Event Invitation": {
    template: `
      {YourName}
      {YourOrganization}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

        We are excited to invite you to our upcoming Charity Event, {EventName}, 
        on {EventDate} at {EventLocation}. This event aims to raise funds for {Cause} 
        and bring together our community in support of this important mission.

        Your presence and support would mean a lot to us. Enclosed is your invitation and 
        details on how you can contribute to this cause.

        Thank you for considering our invitation. We hope to see you there!

      Sincerely,
      {YourName}
      {YourContactNumber}
      {YourEmail}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "EventName", "label": "Event Name", "type": "text" },
      { "id": "EventDate", "label": "Event Date", "type": "date" },
      { "id": "EventLocation", "label": "Event Location", "type": "text" },
      { "id": "Cause", "label": "Cause", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },

  "Donation Request": {
    template: `
      {YourName}
      {YourOrganization}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      I am reaching out to ask for your support in our mission to {MissionStatement}. 
      Your generous contribution will help us {SpecificUseOfFunds} and make a significant 
      difference in the lives of those we serve.

      Please consider making a donation of {SuggestedAmount} or any amount that you can comfortably give. 
      Your support is invaluable and will be greatly appreciated.

       Enclosed is a donation form for your convenience. Thank you for your continued support.

      Sincerely,
      {YourName}
      {YourContactNumber}
      {YourEmail}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "MissionStatement", "label": "Mission Statement", "type": "text" },
      { "id": "SpecificUseOfFunds", "label": "Specific Use of Funds", "type": "text" },
      { "id": "SuggestedAmount", "label": "Suggested Amount", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },

  "Thank You for Your Donation": {
    template: `
      {YourName}
      {YourOrganization}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {DonorName}
      {DonorAddress}
      {City}, {State}, {ZIPCode}

      Dear {DonorName},

      We are deeply grateful for your generous donation of {DonationAmount} to {YourOrganization}. 
      Your support is making a real difference in our efforts to {MissionStatement}.

      Your contribution will help us {SpecificUseOfFunds}. Thank you for standing with us and making 
      our mission possible.

                With sincere gratitude,
      {YourName}
      {YourContactNumber}
      {YourEmail}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "DonorName", "label": "Donor's Name", "type": "text" },
      { "id": "DonorAddress", "label": "Donor's Address", "type": "text" },
      { "id": "DonationAmount", "label": "Donation Amount", "type": "text" },
      { "id": "MissionStatement", "label": "Mission Statement", "type": "text" },
      { "id": "SpecificUseOfFunds", "label": "Specific Use of Funds", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },

  "Campaign Update": {
    template: `
      {YourName}
      {YourOrganization}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      We are pleased to provide you with an update on our fundraising campaign for {CampaignName}. 
      Thanks to supporters like you, we have raised {AmountRaised} towards our goal of {CampaignGoal}.

      Your support has been instrumental in helping us {SpecificImpact}. We are grateful for your 
      continued encouragement and contributions.

      Stay tuned for more updates as we continue our efforts to {MissionStatement}.

         Thank you for being a part of our journey.

      Best regards,
      {YourName}
      {YourContactNumber}
      {YourEmail}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "CampaignName", "label": "Campaign Name", "type": "text" },
      { "id": "AmountRaised", "label": "Amount Raised", "type": "text" },
      { "id": "CampaignGoal", "label": "Campaign Goal", "type": "text" },
      { "id": "SpecificImpact", "label": "Specific Impact", "type": "text" },
      { "id": "MissionStatement", "label": "Mission Statement", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },

  "Grant Proposal Request": {
    template: `
      {YourName}
      {YourOrganization}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {GrantProviderName}
      {GrantProviderOrganization}
      {GrantProviderAddress}
      {City}, {State}, {ZIPCode}

      Dear {GrantProviderName},

      We are seeking a grant of {RequestedAmount} from {GrantProviderOrganization} to support 
      our project, {ProjectName}. This project aims to {ProjectObjective} and address {SpecificNeed} 
      within our community.

      Your grant will enable us to {SpecificUseOfFunds} and achieve our goals. 
      Attached is a detailed proposal outlining our project plan, budget, and expected outcomes.

       Thank you for considering our request. We look forward to the opportunity to work with you.

      Sincerely,
      {YourName}
      {YourContactNumber}
      {YourEmail}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "GrantProviderName", "label": "Grant Provider's Name", "type": "text" },
      { "id": "GrantProviderOrganization", "label": "Grant Provider Organization", "type": "text" },
      { "id": "GrantProviderAddress", "label": "Grant Provider Address", "type": "text" },
      { "id": "RequestedAmount", "label": "Requested Amount", "type": "text" },
      { "id": "ProjectName", "label": "Project Name", "type": "text" },
      { "id": "ProjectObjective", "label": "Project Objective", "type": "text" },
      { "id": "SpecificNeed", "label": "Specific Need", "type": "text" },
      { "id": "SpecificUseOfFunds", "label": "Specific Use of Funds", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },

  "Sponsorship Request": {
    template: `
      {YourName}
      {YourOrganization}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientOrganization}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      We are seeking sponsors for our upcoming event, {EventName}, which will take place on {EventDate}. 
      Your support as a sponsor will help us {EventGoal} and provide significant benefits to {Beneficiaries}.

      We offer various sponsorship levels, each with its own set of benefits. Please find the sponsorship 
      package details enclosed. We would be honored to have your organization as a sponsor.

         Thank you for considering this opportunity to support our cause.

      Sincerely,
      {YourName}
      {YourContactNumber}
      {YourEmail}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
      { "id": "RecipientOrganization", "label": "Recipient Organization", "type": "text" },
      { "id": "RecipientAddress", "label": "Recipient Address", "type": "text" },
      { "id": "EventName", "label": "Event Name", "type": "text" },
      { "id": "EventDate", "label": "Event Date", "type": "date" },
      { "id": "EventGoal", "label": "Event Goal", "type": "text" },
      { "id": "Beneficiaries", "label": "Beneficiaries", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },

  "Thank You for Sponsorship": {
    template: `
      {YourName}
      {YourOrganization}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {SponsorName}
      {SponsorOrganization}
      {SponsorAddress}
      {City}, {State}, {ZIPCode}

      Dear {SponsorName},

      On behalf of {YourOrganization}, I would like to express our heartfelt thanks for your 
      generous sponsorship of {EventName}. Your support is crucial in helping us achieve {EventGoal} and make 
      a positive impact on {Beneficiaries}.

      We are grateful for your commitment to our cause and look forward to working together to make 
      this event a great success.

           With appreciation,
      {YourName}
      {YourContactNumber}
      {YourEmail}
    `,
    fields: [
      { "id": "YourName", "label": "Your Name", "type": "text" },
      { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
      { "id": "YourAddress", "label": "Your Address", "type": "text" },
      { "id": "City", "label": "City", "type": "text" },
      { "id": "State", "label": "State", "type": "text" },
      { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
      { "id": "CurrentDate", "label": "Current Date", "type": "date" },
      { "id": "SponsorName", "label": "Sponsor's Name", "type": "text" },
      { "id": "SponsorOrganization", "label": "Sponsor Organization", "type": "text" },
      { "id": "SponsorAddress", "label": "Sponsor Address", "type": "text" },
      { "id": "EventName", "label": "Event Name", "type": "text" },
      { "id": "EventGoal", "label": "Event Goal", "type": "text" },
      { "id": "Beneficiaries", "label": "Beneficiaries", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  },

  "Safety and Emergency Letters":{
    "Emergency Contact Information Update":{
      template: `
        {YourName}
        {YourPosition}
        {YourOrganization}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {RecipientName}
        {RecipientPosition}
        {RecipientOrganization}
        {RecipientAddress}
        {City}, {State}, {ZIPCode}

        Dear {RecipientName},

         We are updating our emergency contact information to ensure all safety protocols 
         are up to date. Please review the updated contact information below and let us know 
         if any changes are required:

          Emergency Contact Name: {EmergencyContactName}
          Phone Number: {EmergencyContactPhone}
          Email: {EmergencyContactEmail}

          Thank you for your prompt attention to this matter. 

          Sincerely,
          {YourName}
          {YourContactNumber}
          {YourEmail}

      `,
      fields:[
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientOrganization", "label": "Recipient's Organization", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "EmergencyContactName", "label": "Emergency Contact Name", "type": "text" },
        { "id": "EmergencyContactPhone", "label": "Emergency Contact Phone", "type": "text" },
        { "id": "EmergencyContactEmail", "label": "Emergency Contact Email", "type": "email" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Safety Incident Report":{
      template:`
         {YourName}
         {YourPosition}
         {YourOrganization}
         {YourAddress}
         {City}, {State}, {ZIPCode}
         {CurrentDate}

         {RecipientName}
         {RecipientPosition}
         {RecipientOrganization}
         {RecipientAddress}
         {City}, {State}, {ZIPCode}

         Dear {RecipientName},

            This letter is to report a safety incident that occurred on {IncidentDate} 
            at {IncidentLocation}. Below are the details of the incident:

          Incident Description: {IncidentDescription}
          Involved Parties: {InvolvedParties}
          Immediate Actions Taken: {ImmediateActions}
          Further Recommendations: {Recommendations}

          We are currently investigating the incident and will provide further 
          updates as necessary. 

        Sincerely,
       {YourName}
       {YourContactNumber}
       {YourEmail}

      `,
      fields:[
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientOrganization", "label": "Recipient's Organization", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "IncidentDate", "label": "Incident Date", "type": "date" },
        { "id": "IncidentLocation", "label": "Incident Location", "type": "text" },
        { "id": "IncidentDescription", "label": "Incident Description", "type": "text" },
        { "id": "InvolvedParties", "label": "Involved Parties", "type": "text" },
        { "id": "ImmediateActions", "label": "Immediate Actions Taken", "type": "text" },
        { "id": "Recommendations", "label": "Further Recommendations", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },

    "Workplace Safety Alert":{
      template:`
        {YourName}
        {YourPosition}
        {YourOrganization}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        All Employees

        Subject: Workplace Safety Alert

        Dear Team,

          We have recently identified a safety concern regarding {SafetyConcern}. 
          Effective immediately, please adhere to the following guidelines to ensure your safety:

       1. {Guideline1}
       2. {Guideline2}
       3. {Guideline3}

        Your cooperation in addressing this matter is crucial to maintaining a safe work environment. 
        Please report any issues or concerns to {SafetyOfficer}.

             Thank you for your attention to this important matter.

      Best regards,
     {YourName}
     {YourContactNumber}
     {YourEmail}

      `,
      fields:[
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "SafetyConcern", "label": "Safety Concern", "type": "text" },
        { "id": "Guideline1", "label": "Guideline 1", "type": "text" },
        { "id": "Guideline2", "label": "Guideline 2", "type": "text" },
        { "id": "Guideline3", "label": "Guideline 3", "type": "text" },
        { "id": "SafetyOfficer", "label": "Safety Officer", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },

    "Emergency Evacuation Plan":{
      template: `
          {YourName}
          {YourPosition}
          {YourOrganization}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}

       All Employees

       Subject: Emergency Evacuation Plan

       Dear Team,

      In the event of an emergency, please follow the evacuation plan outlined below:

      1. Proceed to the nearest exit as indicated on the evacuation map.
      2. Assemble at the designated assembly area: {AssemblyAreaLocation}.
      3. Report to your supervisor or designated evacuation coordinator.

       Please review the attached evacuation map and ensure you are familiar with the exits 
       and assembly areas.

        Thank you for your cooperation in ensuring a safe and orderly evacuation process.

       Sincerely,
       {YourName}
       {YourContactNumber}
       {YourEmail}

      
      `,
      fields:[
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "AssemblyAreaLocation", "label": "Assembly Area Location", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },

    "Safety Equipment Inspection Report":{
      template:`
           {YourName}
           {YourPosition}
           {YourOrganization}
           {YourAddress}
           {City}, {State}, {ZIPCode}
           {CurrentDate}

           {RecipientName}
           {RecipientPosition}
           {RecipientOrganization}
           {RecipientAddress}
           {City}, {State}, {ZIPCode}

           Dear {RecipientName},

           This report provides an overview of the recent inspection of safety equipment 
           conducted on {InspectionDate}.

           Equipment Inspected:
           - {EquipmentName1}
           - {EquipmentName2}
           - {EquipmentName3}

           Inspection Findings:
           - {Finding1}
           - {Finding2}
           - {Finding3}

           Recommended Actions:
           1. {Action1}
           2. {Action2}
           3. {Action3}

           Please ensure that the recommended actions are addressed promptly.

          Sincerely,
          {YourName}
          {YourContactNumber}
          {YourEmail}

      `,
      fields:[
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientOrganization", "label": "Recipient's Organization", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "InspectionDate", "label": "Inspection Date", "type": "date" },
        { "id": "EquipmentName1", "label": "Equipment Name 1", "type": "text" },
        { "id": "EquipmentName2", "label": "Equipment Name 2", "type": "text" },
        { "id": "EquipmentName3", "label": "Equipment Name 3", "type": "text" },
        { "id": "Finding1", "label": "Finding 1", "type": "text" },
        { "id": "Finding2", "label": "Finding 2", "type": "text" },
        { "id": "Finding3", "label": "Finding 3", "type": "text" },
        { "id": "Action1", "label": "Action 1", "type": "text" },
        { "id": "Action2", "label": "Action 2", "type": "text" },
        { "id": "Action3", "label": "Action 3", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },

    "Incident Follow-Up Report":{
      template:`
           {YourName}
           {YourPosition}
           {YourOrganization}
           {YourAddress}
           {City}, {State}, {ZIPCode}
           {CurrentDate}

           {RecipientName}
           {RecipientPosition}
           {RecipientOrganization}
           {RecipientAddress}
           {City}, {State}, {ZIPCode}

            Dear {RecipientName},

            This letter serves as a follow-up to the incident that occurred on {IncidentDate}. 
            Below is an update on the actions taken and the current status:

           Incident Description: {IncidentDescription}
           Actions Taken: {ActionsTaken}
           Current Status: {CurrentStatus}
           Further Recommendations: {Recommendations}

       We will continue to monitor the situation and will keep you updated.

        Sincerely,
        {YourName}
        {YourContactNumber}
        {YourEmail}

      `,
      fields:[
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientOrganization", "label": "Recipient's Organization", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "IncidentDate", "label": "Incident Date", "type": "date" },
        { "id": "IncidentDescription", "label": "Incident Description", "type": "text" },
        { "id": "ActionsTaken", "label": "Actions Taken", "type": "text" },
        { "id": "CurrentStatus", "label": "Current Status", "type": "text" },
        { "id": "Recommendations", "label": "Further Recommendations", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },

    "Safety Training Confirmation":{
      template:`
           {YourName}
           {YourPosition}
           {YourOrganization}
           {YourAddress}
           {City}, {State}, {ZIPCode}
           {CurrentDate}

           {RecipientName}
           {RecipientPosition}
           {RecipientOrganization}
           {RecipientAddress}
           {City}, {State}, {ZIPCode}

         Dear {RecipientName},

          This letter confirms that you have successfully completed the safety training on {TrainingDate}. 
          The training covered the following topics:

          - {Topic1}
          - {Topic2}
          - {Topic3}

            Your participation in this training is important for maintaining a safe working environment. 
            Please retain this letter for your records.

               Congratulations on completing the training.

            Best regards,
            {YourName}
            {YourContactNumber}
            {YourEmail}

      `,
      fields:[
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientOrganization", "label": "Recipient's Organization", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "TrainingDate", "label": "Training Date", "type": "date" },
        { "id": "Topic1", "label": "Topic 1", "type": "text" },
        { "id": "Topic2", "label": "Topic 2", "type": "text" },
        { "id": "Topic3", "label": "Topic 3", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      
      ]
    }
  },

  "Educational Updates Letters":{
      "Academic Progress Report": {
      template: `
          {YourName}
          {YourPosition}
          {YourSchool}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}

          {ParentName}
          {ParentAddress}
          {City}, {State}, {ZIPCode}

          Dear {ParentName},

           I am writing to provide you with an update on {StudentName}'s academic progress over 
           the period from {StartDate} to {EndDate}. The following highlights the key areas of progress 
           and achievements:

       - **Academic Performance:** {AcademicPerformance}
       - **Strengths:** {Strengths}
       - **Areas for Improvement:** {AreasForImprovement}
       - **Achievements:** {Achievements}

        Please review this report and feel free to reach out if you have any questions or would like to discuss this in more detail.

        Sincerely,
        {YourName}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourSchool", "label": "Your School", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "ParentName", "label": "Parent's Name", "type": "text" },
        { "id": "ParentAddress", "label": "Parent's Address", "type": "text" },
        { "id": "StudentName", "label": "Student's Name", "type": "text" },
        { "id": "StartDate", "label": "Start Date", "type": "date" },
        { "id": "EndDate", "label": "End Date", "type": "date" },
        { "id": "AcademicPerformance", "label": "Academic Performance", "type": "text" },
        { "id": "Strengths", "label": "Strengths", "type": "text" },
        { "id": "AreasForImprovement", "label": "Areas for Improvement", "type": "text" },
        { "id": "Achievements", "label": "Achievements", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Parent-Teacher Conference Invitation": {
      template: `
        {YourName}
        {YourPosition}
        {YourSchool}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {ParentName}
        {ParentAddress}
        {City}, {State}, {ZIPCode}

        Dear {ParentName},

          We would like to invite you to a parent-teacher conference to discuss {StudentName}'s performance and progress in school. The details of the meeting are as follows:

           - **Date:** {MeetingDate}
           - **Time:** {MeetingTime}
           - **Location:** {MeetingLocation}

            Please confirm your availability by {RSVPDate} and let us know if you have any specific topics 
            you would like to discuss.

            We look forward to meeting with you.

         Sincerely,
         {YourName}
         {YourContactNumber}
         {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourSchool", "label": "Your School", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "ParentName", "label": "Parent's Name", "type": "text" },
        { "id": "ParentAddress", "label": "Parent's Address", "type": "text" },
        { "id": "StudentName", "label": "Student's Name", "type": "text" },
        { "id": "MeetingDate", "label": "Meeting Date", "type": "date" },
        { "id": "MeetingTime", "label": "Meeting Time", "type": "time" },
        { "id": "MeetingLocation", "label": "Meeting Location", "type": "text" },
        { "id": "RSVPDate", "label": "RSVP Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Behavioral Improvement Plan": {
      template: `
        {YourName}
        {YourPosition}
        {YourSchool}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {ParentName}
        {ParentAddress}
        {City}, {State}, {ZIPCode}

         Dear {ParentName},

        We have observed certain behavioral concerns with {StudentName} and would like to outline a behavioral 
        improvement plan to address these issues. The plan includes the following strategies:

       - **Behavioral Issue:** {BehavioralIssue}
       - **Action Plan:** {ActionPlan}
       - **Goals:** {Goals}
       - **Timeline:** {Timeline}
       - **Support and Resources:** {SupportResources}

        We believe that with your support and collaboration, {StudentName} can make significant improvements.
         Please review this plan and contact us if you have any questions or suggestions.

        Sincerely,
        {YourName}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourSchool", "label": "Your School", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "ParentName", "label": "Parent's Name", "type": "text" },
        { "id": "ParentAddress", "label": "Parent's Address", "type": "text" },
        { "id": "StudentName", "label": "Student's Name", "type": "text" },
        { "id": "BehavioralIssue", "label": "Behavioral Issue", "type": "text" },
        { "id": "ActionPlan", "label": "Action Plan", "type": "text" },
        { "id": "Goals", "label": "Goals", "type": "text" },
        { "id": "Timeline", "label": "Timeline", "type": "text" },
        { "id": "SupportResources", "label": "Support and Resources", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Student Achievement Recognition": {
      template: `
        {YourName}
        {YourPosition}
        {YourSchool}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {StudentName}
        {StudentAddress}
        {City}, {State}, {ZIPCode}

        Dear {StudentName},

        Congratulations on your recent achievement! We are pleased to recognize your accomplishments in {AchievementDetails}. This recognition is a testament to your hard work and dedication.

         - **Achievement:** {Achievement}
         - **Date of Achievement:** {AchievementDate}

          We are proud of your success and encourage you to continue striving for excellence.

          Sincerely,
          {YourName}
          {YourContactNumber}
          {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourSchool", "label": "Your School", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "StudentName", "label": "Student's Name", "type": "text" },
        { "id": "StudentAddress", "label": "Student's Address", "type": "text" },
        { "id": "Achievement", "label": "Achievement", "type": "text" },
        { "id": "AchievementDetails", "label": "Achievement Details", "type": "text" },
        { "id": "AchievementDate", "label": "Achievement Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Course Enrollment Confirmation": {
      template: `
          {YourName}
          {YourPosition}
          {YourSchool}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}

          {StudentName}
          {StudentAddress}
          {City}, {State}, {ZIPCode}

          Dear {StudentName},

           We are pleased to confirm your enrollment in the following course(s) for the upcoming term:

         - **Course Name:** {CourseName}
         - **Course Code:** {CourseCode}
         - **Start Date:** {StartDate}
         - **Instructor:** {InstructorName}

        Please review the course details and ensure you are prepared for the start of the term. 
        If you have any questions or need further assistance, feel free to contact us.

       Sincerely,
       {YourName}
       {YourContactNumber}
       {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourSchool", "label": "Your School", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "StudentName", "label": "Student's Name", "type": "text" },
        { "id": "StudentAddress", "label": "Student's Address", "type": "text" },
        { "id": "CourseName", "label": "Course Name", "type": "text" },
        { "id": "CourseCode", "label": "Course Code", "type": "text" },
        { "id": "StartDate", "label": "Start Date", "type": "date" },
        { "id": "InstructorName", "label": "Instructor Name", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Scholarship Award Notification": {
      template: `
      {YourName}
      {YourPosition}
      {YourOrganization}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {StudentName}
      {StudentAddress}
      {City}, {State}, {ZIPCode}

       Dear {StudentName},

      Congratulations! We are pleased to inform you that you have been awarded the {ScholarshipName} 
      for the {AcademicYear}. 
      This scholarship recognizes your outstanding academic performance and commitment.

       - **Award Amount:** {AwardAmount}
       - **Scholarship Details:** {ScholarshipDetails}

        Please follow the instructions provided to accept the scholarship and complete any necessary paperwork.

          We wish you continued success in your academic endeavors.

       Sincerely,
      {YourName}
      {YourContactNumber}
      {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourOrganization", "label": "Your Organization", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "StudentName", "label": "Student's Name", "type": "text" },
        { "id": "StudentAddress", "label": "Student's Address", "type": "text" },
        { "id": "ScholarshipName", "label": "Scholarship Name", "type": "text" },
        { "id": "AcademicYear", "label": "Academic Year", "type": "text" },
        { "id": "AwardAmount", "label": "Award Amount", "type": "text" },
        { "id": "ScholarshipDetails", "label": "Scholarship Details", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Graduation Ceremony Invitation": {
      template: `
     {YourName}
     {YourPosition}
     {YourSchool}
     {YourAddress}
     {City}, {State}, {ZIPCode}
     {CurrentDate}

     {RecipientName}
     {RecipientAddress}
     {City}, {State}, {ZIPCode}

     Dear {RecipientName},

        We are delighted to invite you to {StudentName}'s graduation ceremony. 
        The details of the event are as follows:

        - **Date:** {CeremonyDate}
        - **Time:** {CeremonyTime}
        - **Venue:** {CeremonyVenue}
        - **Dress Code:** {DressCode}

       Please RSVP by {RSVPDate} and let us know if you have any special requirements.

      We look forward to celebrating this significant milestone with you.

      Sincerely,
      {YourName}
      {YourContactNumber}
      {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourSchool", "label": "Your School", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "StudentName", "label": "Student's Name", "type": "text" },
        { "id": "CeremonyDate", "label": "Ceremony Date", "type": "date" },
        { "id": "CeremonyTime", "label": "Ceremony Time", "type": "time" },
        { "id": "CeremonyVenue", "label": "Ceremony Venue", "type": "text" },
        { "id": "DressCode", "label": "Dress Code", "type": "text" },
        { "id": "RSVPDate", "label": "RSVP Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    }
  },

  "Business Correspondence":{
   "Business Proposal": {
      template: `
       {YourName}
       {YourPosition}
       {YourCompany}
       {YourAddress}
       {City}, {State}, {ZIPCode}
       {CurrentDate}

       {RecipientName}
       {RecipientPosition}
       {RecipientCompany}
       {RecipientAddress}
       {City}, {State}, {ZIPCode}

        Dear {RecipientName},

         We are excited to present to you our proposal for {ProposalSubject}. Our proposal outlines {ProposalDetails} 
         and how it aligns with your needs.

        We believe this proposal will bring significant value to both parties and would be delighted to discuss it further. 
        Please contact us to arrange a meeting.

            Thank you for considering our proposal.

          Sincerely,
         {YourName}
         {YourContactNumber}
         {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourCompany", "label": "Your Company", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientCompany", "label": "Recipient's Company", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "ProposalSubject", "label": "Proposal Subject", "type": "text" },
        { "id": "ProposalDetails", "label": "Proposal Details", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Complaint Letter": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientPosition}
      {RecipientCompany}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

       Dear {RecipientName},

        I am writing to formally address a complaint regarding {ComplaintSubject}. 
        Our experience with {IssueDescription} has been unsatisfactory.

        We request that you investigate this matter and provide a resolution. 
        We appreciate your prompt attention to this issue.

        Sincerely,
        {YourName}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourCompany", "label": "Your Company", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientCompany", "label": "Recipient's Company", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "ComplaintSubject", "label": "Complaint Subject", "type": "text" },
        { "id": "IssueDescription", "label": "Issue Description", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Job Offer Letter": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientPosition}
      {RecipientCompany}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

       Dear {RecipientName},

          We are pleased to extend an offer for the position of {JobTitle} at {YourCompany}. 
          Your start date will be {StartDate} and your starting salary will be {Salary}.

          Please review the terms and conditions of your employment and let us know if 
          you accept this offer by {AcceptanceDate}.

          Congratulations and we look forward to your positive response.

        Best regards,
        {YourName}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourCompany", "label": "Your Company", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientCompany", "label": "Recipient's Company", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "JobTitle", "label": "Job Title", "type": "text" },
        { "id": "StartDate", "label": "Start Date", "type": "date" },
        { "id": "Salary", "label": "Salary", "type": "text" },
        { "id": "AcceptanceDate", "label": "Acceptance Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Invoice": {
      template: `
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {RecipientName}
        {RecipientPosition}
        {RecipientCompany}
        {RecipientAddress}
        {City}, {State}, {ZIPCode}

        Dear {RecipientName},

            Please find attached the invoice for {InvoiceDescription}. 
            The total amount due is {TotalAmount}.

            The payment is due by {DueDate}. Please make the payment to {PaymentDetails}.

                Thank you for your prompt attention to this matter.

        Sincerely,
        {YourName}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourCompany", "label": "Your Company", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientCompany", "label": "Recipient's Company", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "InvoiceDescription", "label": "Invoice Description", "type": "text" },
        { "id": "TotalAmount", "label": "Total Amount", "type": "text" },
        { "id": "DueDate", "label": "Due Date", "type": "date" },
        { "id": "PaymentDetails", "label": "Payment Details", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Purchase Order": {
      template: `
         {YourName}
         {YourPosition}
         {YourCompany}
         {YourAddress}
         {City}, {State}, {ZIPCode}
         {CurrentDate}

         {RecipientName}
         {RecipientPosition}
         {RecipientCompany}
         {RecipientAddress}
         {City}, {State}, {ZIPCode}

         Dear {RecipientName},

          We are placing an order for the following items:

          - {ItemDescription1}: {ItemQuantity1} at {ItemPrice1}
          - {ItemDescription2}: {ItemQuantity2} at {ItemPrice2}

          The total amount for this order is {TotalAmount}. 
          Please confirm receipt of this purchase order and provide an estimated delivery date.

                Thank you for your prompt attention.

             Sincerely,
             {YourName}
             {YourContactNumber}
             {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourCompany", "label": "Your Company", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientCompany", "label": "Recipient's Company", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "ItemDescription1", "label": "Item Description 1", "type": "text" },
        { "id": "ItemQuantity1", "label": "Item Quantity 1", "type": "text" },
        { "id": "ItemPrice1", "label": "Item Price 1", "type": "text" },
        { "id": "ItemDescription2", "label": "Item Description 2", "type": "text" },
        { "id": "ItemQuantity2", "label": "Item Quantity 2", "type": "text" },
        { "id": "ItemPrice2", "label": "Item Price 2", "type": "text" },
        { "id": "TotalAmount", "label": "Total Amount", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Meeting Request": {
      template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}

          {RecipientName}
          {RecipientPosition}
          {RecipientCompany}
          {RecipientAddress}
          {City}, {State}, {ZIPCode}

           Dear {RecipientName},

               I would like to request a meeting with you to discuss {MeetingSubject}. 
               Please let me know your availability over the next week so that we can arrange a 
               convenient time to meet.

            Thank you for your attention to this request. I look forward to your reply.

            Sincerely,
           {YourName}
           {YourContactNumber}
           {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourCompany", "label": "Your Company", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientCompany", "label": "Recipient's Company", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "MeetingSubject", "label": "Meeting Subject", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Acknowledgment Letter": {
      template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}

          {RecipientName}
          {RecipientPosition}
          {RecipientCompany}
          {RecipientAddress}
          {City}, {State}, {ZIPCode}

          Dear {RecipientName},

          We acknowledge receipt of {AcknowledgmentSubject}. 
          Your {AcknowledgmentDetails} has been received and processed.

         Thank you for your attention to this matter. 
         If you need further assistance, please contact us.

         Sincerely,
         {YourName}
         {YourContactNumber}
         {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourCompany", "label": "Your Company", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientCompany", "label": "Recipient's Company", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "AcknowledgmentSubject", "label": "Acknowledgment Subject", "type": "text" },
        { "id": "AcknowledgmentDetails", "label": "Acknowledgment Details", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Follow-Up Letter": {
      template: `
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {CurrentDate}

        {RecipientName}
        {RecipientPosition}
        {RecipientCompany}
        {RecipientAddress}
        {City}, {State}, {ZIPCode}

         Dear {RecipientName},

          I am following up on our previous correspondence regarding {FollowUpSubject}.
          I wanted to check in and see if you have any updates or if further information is required.

             Please let me know at your earliest convenience.

                            Thank you.

           Sincerely,
          {YourName}
          {YourContactNumber}
          {YourEmail}
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourPosition", "label": "Your Position", "type": "text" },
        { "id": "YourCompany", "label": "Your Company", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "RecipientCompany", "label": "Recipient's Company", "type": "text" },
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "FollowUpSubject", "label": "Follow-Up Subject", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    }
  },



};

const LetterMaker = ({ selectedTemplate }) => {
  const [formData, setFormData] = useState({});
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const generatedLetterRef = useRef(null);
  const [networkError, setNetworkError] = useState(false); // State to manage network error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setFormData({ ...formData, letterBody: content });
  };

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };


  useEffect(() => {
    const handleOnline = () => setNetworkError(false);
    const handleOffline = () => setNetworkError(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial status
    if (!navigator.onLine) {
      setNetworkError(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    const category = Object.keys(letterTemplates).find(category => letterTemplates[category][selectedTemplate]);
    const templateDetails = letterTemplates[category][selectedTemplate];
    let filledTemplate = templateDetails.template;
    templateDetails.fields.forEach(field => {
      const placeholder = `{${field.id}}`;
      filledTemplate = filledTemplate.replace(new RegExp(placeholder, 'g'), formData[field.id] || '');
    });
    setGeneratedLetter(filledTemplate);
    setFormSubmitted(true);
    setTimeout(() => {
      if (generatedLetterRef.current) {
        generatedLetterRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const downloadAsPDF = () => {
    const element = document.getElementById('generated-letter');
    const opt = {
      margin: 0.5,
      filename: `${selectedTemplate}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  if (!selectedTemplate) {
    return null;
  }

  const category = Object.keys(letterTemplates).find(category => letterTemplates[category][selectedTemplate]);
  if (!category) {
    return null;
  }

  const fields = letterTemplates[category][selectedTemplate].fields;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h3 className='selected-template'>Selected Template: {selectedTemplate}</h3>
          <div className="card">
            <div className="card-body generate">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {fields.map((field, index) => (
  <div className="mb-3" key={field.id || index}>
    <label htmlFor={field.id} className="form-label">{field.label}</label>
    {field.type === 'quill' ? (
      <ReactQuill
        value={formData.letterBody || ''}
        onChange={handleQuillChange}
        modules={LetterMaker.modules}
        formats={LetterMaker.formats}
        className="quill-editor"
      />
    ) : (
      <input
        type={field.type}
        className="form-control"
        id={field.id}
        name={field.id}
        value={formData[field.id] || ''}
        onChange={handleChange}
        required
      />
    )}
  </div>
))}

                  <button type="submit" className="btn btn-primary generate-button" >Generate Letter</button>
                </form>
              ) : (
                <div className='GenLetterSection'>
                  <h5>Generated Letter</h5>
                  <div id="generated-letter" ref={generatedLetterRef}>
                    <pre>{stripHtmlTags(generatedLetter)}</pre>
                  </div>
                  {networkError && (
        <div className="network-error">
          Network issue detected. Some features may not work properly.
        </div>
      )}
                  <button className="btn btn-success mt-3" onClick={downloadAsPDF}>Download as PDF</button>
                  <button className="btn btn-secondary mt-3" onClick={() => setFormSubmitted(false)}>Edit</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LetterMaker.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  }
};

LetterMaker.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default LetterMaker;
