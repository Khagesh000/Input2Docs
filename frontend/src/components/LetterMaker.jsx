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
           I understand the significance of my responsibilities and have taken the necessary steps 
           to ensure 
           that my absence did not hinder the workflow.

           I appreciate your understanding and support during this time. 
           I will make every effort to catch up on any missed work and fulfill my duties promptly 
           upon my return.

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
          feeling unwell and have consulted with my doctor, who has advised me to rest and recover 
          at home.

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
      Your support as a sponsor will help us {EventGoal} and provide significant benefits 
      to {Beneficiaries}.

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
      generous sponsorship of {EventName}. Your support is crucial in helping us achieve {EventGoal} 
      and make  a positive impact on {Beneficiaries}.
     

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

        Please review this report and feel free to reach out if you have any questions or would like 
        to discuss this in more detail.

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

          We would like to invite you to a parent-teacher conference to discuss {StudentName}'s 
          performance and progress in school. The details of the meeting are as follows:

           - **Date:** {MeetingDate}
           - **Time:** {MeetingTime}
           - **Location:** {MeetingLocation}

            Please confirm your availability by {RSVPDate} and let us know if you have any 
            specific topics you would like to discuss.
            

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

        We have observed certain behavioral concerns with {StudentName} and would like to 
        outline a behavioral 
        improvement plan to address these issues. The plan includes the following strategies:

       - **Behavioral Issue:** {BehavioralIssue}
       - **Action Plan:** {ActionPlan}
       - **Goals:** {Goals}
       - **Timeline:** {Timeline}
       - **Support and Resources:** {SupportResources}

        We believe that with your support and collaboration, {StudentName} can make 
        significant improvements.
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

        Congratulations on your recent achievement! We are pleased to recognize your accomplishments 
        in {AchievementDetails}. This recognition is a testament to your hard work and dedication.

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

        Please follow the instructions provided to accept the scholarship and complete any 
        necessary paperwork.

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

         We are excited to present to you our proposal for {ProposalSubject}. Our proposal 
         outlines {ProposalDetails} and how it aligns with your needs.
         

        We believe this proposal will bring significant value to both parties and would be 
        delighted to discuss it further. Please contact us to arrange a meeting.
        

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
  
  "Internal Communication": {
        "Meeting Invitation": {
            template: `
                Subject: Meeting Invitation - {MeetingTopic}

                Hi {RecipientName},

                You are cordially invited to attend a meeting scheduled on {MeetingDate}
                 at {MeetingTime}. 
                The primary agenda of the meeting will be {MeetingAgenda}. 

                Please let us know if you will be able to attend. If you have any questions or 
                need further information, feel free to contact me.
                

                Looking forward to your confirmation.

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
                { "id": 'MeetingTopic', "label": 'Meeting Topic', "type": 'text' },
                { "id": 'MeetingDate', "label": 'Meeting Date', "type": 'date' },
                { "id": 'MeetingTime', "label": 'Meeting Time', "type": 'time' },
                { "id": 'MeetingAgenda', "label": 'Meeting Agenda', "type": 'textarea' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Project Update": {
            template: `
                Subject: Project Update - {ProjectName}

                Hi {RecipientName},

                I wanted to share the latest updates regarding the {ProjectName} project. 
                {ProjectUpdateDetails}

                We have made significant progress and are on track to meet our deadlines.
                If you have any questions or need further information, please do not 
                hesitate to reach out.
                

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
                { "id": 'ProjectName', "label": 'Project Name', "type": 'text' },
                { "id": 'ProjectUpdateDetails', "label": 'Project Update Details', "type": 'textarea' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Company Announcement": {
            template: `
                Subject: Important Company Announcement

                Hi {RecipientName},

                We are excited to announce {AnnouncementDetails}.

                This development marks a significant milestone for our company, and we look forward 
                to your continued support and collaboration.
                

                Thank you for your attention.

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
                { "id": 'AnnouncementDetails', "label": 'Announcement Details', "type": 'textarea' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "HR Communication": {
            template: `
                Subject: HR Communication

                Hi {RecipientName},

                We would like to inform you about {HRDetails}.

                For any questions or further information, please feel free to contact the HR department.

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
                { "id": 'HRDetails', "label": 'HR Details', "type": 'textarea' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Policy Update": {
            template: `
                Subject: Policy Update

                Hi {RecipientName},

                Please be informed of the following policy update: {PolicyDetails}.

                Kindly acknowledge receipt of this update and feel free to reach out if you have 
                any questions.

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
                { "id": 'PolicyDetails', "label": 'Policy Details', "type": 'textarea' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Event Announcement": {
            template: `
                Subject: Upcoming Event: {EventName}

                Hi {RecipientName},

                We are thrilled to announce our upcoming event: {EventName}. 
                The event is scheduled to take place on {EventDate} at {EventVenue}.

                We look forward to your participation. Please confirm your attendance at your 
                earliest convenience.

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
                { "id": 'EventName', "label": 'Event Name', "type": 'text' },
                { "id": 'EventDate', "label": 'Event Date', "type": 'date' },
                { "id": 'EventVenue', "label": 'Event Venue', "type": 'text' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Team Appreciation": {
            template: `
                Subject: Appreciation for Your Hard Work

                Hi {RecipientName},

                I wanted to take a moment to express my appreciation for your hard work and dedication 
                on {ProjectName}. 
                Your contributions have been invaluable, and your efforts have not gone unnoticed.

                Thank you for being an essential part of our team.

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
                { "id": 'ProjectName', "label": 'Project Name', "type": 'text' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        }
    },


    "Employee Letters": {
        "Offer Letter": {
            template: `
                Subject: Job Offer for {JobTitle} Position

                Dear {CandidateName},

                We are pleased to offer you the position of {JobTitle} at {CompanyName}. Your starting 
                date will be {StartDate}, and your salary will be {Salary} per annum.
                

                Please review the attached offer letter and let us know if you have any questions.
                 We are excited to have you join our team!
                

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'CandidateName', "label": 'Candidate Name', "type": 'text' },
                { "id": 'JobTitle', "label": 'Job Title', "type": 'text' },
                { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
                { "id": 'StartDate', "label": 'Start Date', "type": 'date' },
                { "id": 'Salary', "label": 'Salary', "type": 'text' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Appointment Letter": {
            template: `
                Subject: Appointment Letter for {JobTitle}

                Dear {EmployeeName},

                We are delighted to confirm your appointment as {JobTitle} at {CompanyName}. 
                Your employment will commence on {StartDate}. You will be reporting to 
                {ReportingManager}.

                Please find attached the terms and conditions of your employment. 
                We look forward to a fruitful collaboration.

                Sincerely,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
                { "id": 'JobTitle', "label": 'Job Title', "type": 'text' },
                { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
                { "id": 'StartDate', "label": 'Start Date', "type": 'date' },
                { "id": 'ReportingManager', "label": 'Reporting Manager', "type": 'text' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Promotion Letter": {
            template: `
                Subject: Promotion to {NewJobTitle}

                Dear {EmployeeName},

                Congratulations! We are pleased to inform you of your promotion to 
                {NewJobTitle} effective from {EffectiveDate}. 
                Your new salary will be {NewSalary} per annum.

                We appreciate your hard work and dedication. 
                Please contact HR for any questions regarding your new role.

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
                { "id": 'NewJobTitle', "label": 'New Job Title', "type": 'text' },
                { "id": 'EffectiveDate', "label": 'Effective Date', "type": 'date' },
                { "id": 'NewSalary', "label": 'New Salary', "type": 'text' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Termination Letter": {
            template: `
                Subject: Termination of Employment

                Dear {EmployeeName},

                We regret to inform you that your employment with {CompanyName} will be 
                terminated effective from {TerminationDate}. 
                The reason for this decision is {TerminationReason}.

                Please arrange to return all company property and settle any outstanding matters. 
                For further details, refer to the attached document or contact HR.
                

                Sincerely,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
                { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
                { "id": 'TerminationDate', "label": 'Termination Date', "type": 'date' },
                { "id": 'TerminationReason', "label": 'Termination Reason', "type": 'textarea' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Appreciation Letter": {
            template: `
                Subject: Appreciation for Outstanding Performance

                Dear {EmployeeName},

                We would like to express our sincere appreciation for your exceptional performance 
                on {ProjectName}. Your dedication and hard work have been exemplary.

                Keep up the great work!

                Best regards,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
                { "id": 'ProjectName', "label": 'Project Name', "type": 'text' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Warning Letter": {
            template: `
                Subject: Warning Letter for {Reason}

                Dear {EmployeeName},

                This letter serves as a formal warning regarding {IssueDescription}. 
                This behavior is unacceptable and violates company policies.

                We expect immediate improvement in this regard. Failure to comply may result 
                in further disciplinary action.

                Sincerely,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
                { "id": 'Reason', "label": 'Reason for Warning', "type": 'text' },
                { "id": 'IssueDescription', "label": 'Issue Description', "type": 'textarea' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        },
        "Resignation Acceptance Letter": {
            template: `
                Subject: Acceptance of Resignation

                Dear {EmployeeName},

                We have received your resignation letter dated {ResignationDate}. 
                This letter is to confirm that your resignation has been accepted, and 
                your last working day will be {LastWorkingDay}.

                We thank you for your contributions and wish you all the best 
                in your future endeavors.

                Sincerely,
                {SenderName}
                {SenderPosition}
                {SenderDepartment}
            `,
            fields: [
                { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
                { "id": 'ResignationDate', "label": 'Resignation Date', "type": 'date' },
                { "id": 'LastWorkingDay', "label": 'Last Working Day', "type": 'date' },
                { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
                { "id": 'SenderPosition', "label": 'Sender Position', "type": 'text' },
                { "id": 'SenderDepartment', "label": 'Sender Department', "type": 'text' }
            ]
        }
    },

    "Client Relations":{

      "Welcome Email": {
      template: `
      Dear {ClientName},

      Welcome to {CompanyName}! We are thrilled to have you on board. As a leading provider 
      of {Industry/Sector}, 
      we are dedicated to delivering the highest quality services tailored to your specific needs.

      Our team is here to support you every step of the way. As a new client, 
      you'll have access to the following benefits:
      - A dedicated account manager, {AccountManagerName}, who will be your primary point of contact.
      - A complimentary {InitialService} to get you started.
      - Access to our 24/7 customer support for any questions or issues.

      To get started, please find the attached welcome packet containing all the information 
      you need about our services. 
      We recommend scheduling an introductory call with {AccountManagerName} to discuss your goals 
      and how we can best achieve  them together.
     

      We look forward to a long and successful partnership. Should you need anything, 
      please don't hesitate to reach out.

      Best regards,
      {YourName}
      {YourPosition}
      {YourContactInformation}
    `,
    fields: [
      { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
      { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
      { "id": 'Industry/Sector', "label": 'Industry/Sector', "type": 'text' },
      { "id": 'AccountManagerName', "label": 'Account Manager Name', "type": 'text' },
      { "id": 'InitialService', "label": 'Initial Service', "type": 'text' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
      { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
    ]
  },

  "Follow-Up Email": {
    template: `
      Dear {ClientName},

      It was a pleasure meeting with you on {Date}. We are excited about the opportunity to 
      collaborate on {ProjectName}. 
      As discussed, our proposal outlines the key deliverables and timelines to ensure a 
      successful project execution.

      Here are the next steps:
      1. Review the attached proposal document for details.
      2. Schedule a follow-up meeting to finalize the project scope and contract.
      3. Begin the project kickoff process with our team.

      We are committed to delivering exceptional results and are confident in our ability to 
      meet your needs. 
      Please let us know if you have any questions or require further clarification on any 
      aspect of the proposal.

      Looking forward to your feedback.

      Best regards,
      {YourName}
      {YourPosition}
      {YourContactInformation}
    `,
    fields: [
      { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
      { "id": 'Date', "label": 'Date of Meeting/Conversation', "type": 'text' },
      { "id": 'ProjectName', "label": 'Project Name', "type": 'text' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
      { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
    ]
  },

  "Feedback Request": {
     template: `
      Dear {ClientName},

      We hope you have been satisfied with our services so far. At {CompanyName}, 
      we continuously strive to improve our offerings, 
      and your feedback plays a crucial role in this process. We would greatly appreciate 
      it if you could take a few minutes to share your experience with us.
      

      Please complete our brief survey: {FeedbackLink}. Your responses will help us better 
      understand your needs and enhance the quality of our services.
      

      As a token of our appreciation, you will receive a {Reward} upon completion of the survey. 
      Thank you for being a valued client and for taking the time to provide your feedback.

      Best regards,
      {YourName}
      {YourPosition}
      {YourContactInformation}
    `,
    fields: [
      { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
      { "id": 'FeedbackLink', "label": 'Feedback Link', "type": 'text' },
      { "id": 'Reward', "label": 'Reward', "type": 'text' },
      { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
      { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
    ]
  },

  "Problem Resolution": {
     template: `
      Dear {ClientName},

      We regret any inconvenience you may have experienced with {Issue}. At {CompanyName}, 
      we take pride in delivering high-quality service and are sorry that we fell short in this instance.

      Our team has investigated the matter and determined that the issue was caused by {Cause}. 
      We have taken the following steps to resolve it:
      - {Step1}
      - {Step2}
      - {Step3}

      We have also implemented additional measures to prevent similar issues in the future. 
      Please let us know if the resolution meets your expectations or if there is anything more
       we can do.

      We value your business and are committed to ensuring your satisfaction. Thank you for your 
      understanding and patience.

      Best regards,
      {YourName}
      {YourPosition}
      {YourContactInformation}
    `,
    fields: [
      { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
      { "id": 'Issue', "label": 'Issue/Problem', "type": 'text' },
      { "id": 'Cause', "label": 'Cause of Issue', "type": 'text' },
      { "id": 'Step1', "label": 'Resolution Step 1', "type": 'text' },
      { "id": 'Step2', "label": 'Resolution Step 2', "type": 'text' },
      { "id": 'Step3', "label": 'Resolution Step 3', "type": 'text' },
      { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
      { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
    ]
  },

  "Service/Product Update": {
     template: `
      Dear {ClientName},

      We are pleased to announce the latest updates to our {Product/ServiceName}, designed to 
      enhance your experience and bring even more value to your business. The new features include:
      
      - {Feature1}: {Feature1Description}
      - {Feature2}: {Feature2Description}
      - {Feature3}: {Feature3Description}

      We believe these improvements will significantly benefit your operations and help you achieve your 
      goals more efficiently. 
      For more information, please visit {LinkToDetails} or contact our support team.

      We appreciate your continued partnership and are excited to bring you these new enhancements.

      Best regards,
      {YourName}
      {YourPosition}
      {YourContactInformation}
    `,
    fields: [
      { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
      { "id": 'Product/ServiceName', "label": 'Product/Service Name', "type": 'text' },
      { "id": 'Feature1', "label": 'Feature 1', "type": 'text' },
      { "id": 'Feature1Description', "label": 'Feature 1 Description', "type": 'text' },
      { "id": 'Feature2', "label": 'Feature 2', "type": 'text' },
      { "id": 'Feature2Description', "label": 'Feature 2 Description', "type": 'text' },
      { "id": 'Feature3', "label": 'Feature 3', "type": 'text' },
      { "id": 'Feature3Description', "label": 'Feature 3 Description', "type": 'text' },
      { "id": 'LinkToDetails', "label": 'Link to Details', "type": 'text' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
      { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
    ]
  },

  "Special Offers": {
     template: `
      Dear {ClientName},

      As a valued client, we are excited to offer you an exclusive {Discount/Offer} 
      on our {Product/ServiceName}. 
      This special offer is available for a limited time and includes:
      - {OfferDetail1}
      - {OfferDetail2}
      - {OfferDetail3}

      To take advantage of this offer, please use the promo code {PromoCode} at checkout or mention 
      it when contacting our sales team. 
      This is our way of saying thank you for your continued support and trust in {CompanyName}.

      Don't miss out on this fantastic opportunity! If you have any questions or need assistance, 
      please feel free to reach out.

      Best regards,
      {YourName}
      {YourPosition}
      {YourContactInformation}
    `,
    fields: [
      { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
      { "id": 'Discount/Offer', "label": 'Discount/Offer', "type": 'text' },
      { "id": 'Product/ServiceName', "label": 'Product/Service Name', "type": 'text' },
      { "id": 'OfferDetail1', "label": 'Offer Detail 1', "type": 'text' },
      { "id": 'OfferDetail2', "label": 'Offer Detail 2', "type": 'text' },
      { "id": 'OfferDetail3', "label": 'Offer Detail 3', "type": 'text' },
      { "id": 'PromoCode', "label": 'Promo Code', "type": 'text' },
      { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
      { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
    ]
  },

  "Anniversary Thank You": {
     template: `
      Dear {ClientName},

      As we celebrate another year together, we want to express our deepest gratitude for your 
      continued support and partnership. 
      It's been {Years} years since we first started working together, and we have achieved 
      remarkable milestones together.

      We are grateful for the trust you place in us and the opportunities you've given us to serve you. 
      As a token of our appreciation, 
      we would like to offer you {Gift/Discount} on your next purchase/service.

      We look forward to many more years of collaboration and success. Thank you for being a 
      valued client and for your unwavering loyalty.
      

      Best regards,
      {YourName}
      {YourPosition}
      {YourContactInformation}
    `,
    fields: [
      { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
      { "id": 'Years', "label": 'Number of Years', "type": 'text' },
      { "id": 'Gift/Discount', "label": 'Gift/Discount', "type": 'text' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
      { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
    ]
  }
    },

    "Meeting and Appointment":{
      "Meeting Invitation": {
        template: `
          Subject: Invitation to {MeetingType} on {MeetingDate}
    
          Dear {AttendeeName},
    
          We are pleased to invite you to a {MeetingType} to discuss {MeetingPurpose}. 
          The meeting will take place on {MeetingDate} at {MeetingTime} via {MeetingLocation/Platform}.
    
          The agenda for the meeting includes:
          1. {AgendaItem1}
          2. {AgendaItem2}
          3. {AgendaItem3}
    
          Please confirm your availability by replying to this email at your earliest convenience. 
          If you have any additional topics you'd like to discuss, feel free to let us know 
          so we can include them in the agenda.
    
          We look forward to your participation.
    
          Best regards,
          {YourName}
          {YourPosition}
          {YourContactInformation}
        `,
        fields: [
          { "id": 'MeetingType', "label": 'Type of Meeting', "type": 'text' },
          { "id": 'MeetingDate', "label": 'Meeting Date', "type": 'date' },
          { "id": 'AttendeeName', "label": 'Attendee Name', "type": 'text' },
          { "id": 'MeetingTime', "label": 'Meeting Time', "type": 'time' },
          { "id": 'MeetingLocation/Platform', "label": 'Meeting Location/Platform', "type": 'text' },
          { "id": 'MeetingPurpose', "label": 'Meeting Purpose', "type": 'text' },
          { "id": 'AgendaItem1', "label": 'Agenda Item 1', "type": 'text' },
          { "id": 'AgendaItem2', "label": 'Agenda Item 2', "type": 'text' },
          { "id": 'AgendaItem3', "label": 'Agenda Item 3', "type": 'text' },
          { "id": 'YourName', "label": 'Your Name', "type": 'text' },
          { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
          { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
        ]
      },
    
      "Appointment Confirmation": {
        template: `
          Subject: Confirmation of Your Appointment on {AppointmentDate}
    
          Dear {ClientName},
    
          We are writing to confirm your upcoming appointment with {Person/Department} at 
          {CompanyName} on {AppointmentDate} at {AppointmentTime}.  
          The meeting will take place at {Location/Platform}.
    
          Please bring the following documents/items:
          - {Document1}
          - {Document2}
          - {Document3}
    
          Should you need to reschedule or have any questions, please contact us 
          at {ContactInformation}.
    
          We look forward to meeting with you.
    
          Best regards,
          {YourName}
          {YourPosition}
          {YourContactInformation}
        `,
        fields: [
          { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
          { "id": 'AppointmentDate', "label": 'Appointment Date', "type": 'date' },
          { "id": 'AppointmentTime', "label": 'Appointment Time', "type": 'time' },
          { "id": 'Person/Department', "label": 'Person/Department', "type": 'text' },
          { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
          { "id": 'Location/Platform', "label": 'Location/Platform', "type": 'text' },
          { "id": 'Document1', "label": 'Document 1', "type": 'text' },
          { "id": 'Document2', "label": 'Document 2', "type": 'text' },
          { "id": 'Document3', "label": 'Document 3', "type": 'text' },
          { "id": 'ContactInformation', "label": 'Contact Information', "type": 'text' },
          { "id": 'YourName', "label": 'Your Name', "type": 'text' },
          { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
          { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
        ]
      },
    
      "Meeting Agenda": {
         template: `
          Subject: Agenda for {MeetingType} on {MeetingDate}
    
          Dear {AttendeeName},
    
          Please find below the agenda for our upcoming {MeetingType} scheduled for {MeetingDate} at 
          {MeetingTime} via {MeetingLocation/Platform}.
    
          **Agenda:**
          1. **Welcome and Introduction** - {WelcomeTime} to {WelcomeEndTime}
          2. **{AgendaItem1}** - {AgendaItem1Time} to {AgendaItem1EndTime}
          3. **{AgendaItem2}** - {AgendaItem2Time} to {AgendaItem2EndTime}
          4. **{AgendaItem3}** - {AgendaItem3Time} to {AgendaItem3EndTime}
          5. **Open Discussion** - {OpenDiscussionTime} to {OpenDiscussionEndTime}
          6. **Closing Remarks** - {ClosingRemarksTime} to {ClosingRemarksEndTime}
    
          Please review the attached documents prior to the meeting to facilitate a 
          productive discussion.
    
          We appreciate your timely arrival and participation.
    
          Best regards,
          {YourName}
          {YourPosition}
          {YourContactInformation}
        `,
        fields: [
          { "id": 'MeetingType', "label": 'Type of Meeting', "type": 'text' },
          { "id": 'MeetingDate', "label": 'Meeting Date', "type": 'date' },
          { "id": 'AttendeeName', "label": 'Attendee Name', "type": 'text' },
          { "id": 'MeetingTime', "label": 'Meeting Time', "type": 'time' },
          { "id": 'MeetingLocation/Platform', "label": 'Meeting Location/Platform', "type": 'text' },
          { "id": 'WelcomeTime', "label": 'Welcome Start Time', "type": 'time' },
          { "id": 'WelcomeEndTime', "label": 'Welcome End Time', "type": 'time' },
          { "id": 'AgendaItem1', "label": 'Agenda Item 1', "type": 'text' },
          { "id": 'AgendaItem1Time', "label": 'Agenda Item 1 Start Time', "type": 'time' },
          { "id": 'AgendaItem1EndTime', "label": 'Agenda Item 1 End Time', "type": 'time' },
          { "id": 'AgendaItem2', "label": 'Agenda Item 2', "type": 'text' },
          { "id": 'AgendaItem2Time', "label": 'Agenda Item 2 Start Time', "type": 'time' },
          { "id": 'AgendaItem2EndTime', "label": 'Agenda Item 2 End Time', "type": 'time' },
          { "id": 'AgendaItem3', "label": 'Agenda Item 3', "type": 'text' },
          { "id": 'AgendaItem3Time', "label": 'Agenda Item 3 Start Time', "type": 'time' },
          { "id": 'AgendaItem3EndTime', "label": 'Agenda Item 3 End Time', "type": 'time' },
          { "id": 'OpenDiscussionTime', "label": 'Open Discussion Start Time', "type": 'time' },
          { "id": 'OpenDiscussionEndTime', "label": 'Open Discussion End Time', "type": 'time' },
          { "id": 'ClosingRemarksTime', "label": 'Closing Remarks Start Time', "type": 'time' },
          { "id": 'ClosingRemarksEndTime', "label": 'Closing Remarks End Time', "type": 'time' },
          { "id": 'YourName', "label": 'Your Name', "type": 'text' },
          { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
          { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
        ]
      },
    
      "Appointment Reminder": {
         template: `
          Subject: Reminder: Upcoming Appointment on {AppointmentDate}
    
          Dear {ClientName},
    
          This is a friendly reminder of your upcoming appointment with {Person/Department} 
          at {CompanyName} on {AppointmentDate} at {AppointmentTime}. 
          The meeting will be held at {Location/Platform}.
    
          Please make sure to bring the following documents/items:
          - {Document1}
          - {Document2}
          - {Document3}
    
          If you need to reschedule or have any questions, kindly contact us at {ContactInformation}.
    
          We look forward to seeing you soon.
    
          Best regards,
          {YourName}
          {YourPosition}
          {YourContactInformation}
        `,
        fields: [
          { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
          { "id": 'AppointmentDate', "label": 'Appointment Date', "type": 'date' },
          { "id": 'AppointmentTime', "label": 'Appointment Time', "type": 'time' },
          { "id": 'Person/Department', "label": 'Person/Department', "type": 'text' },
          { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
          { "id": 'Location/Platform', "label": 'Location/Platform', "type": 'text' },
          { "id": 'Document1', "label": 'Document 1', "type": 'text' },
          { "id": 'Document2', "label": 'Document 2', "type": 'text' },
          { "id": 'Document3', "label": 'Document 3', "type": 'text' },
          { "id": 'ContactInformation', "label": 'Contact Information', "type": 'text' },
          { "id": 'YourName', "label": 'Your Name', "type": 'text' },
          { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
          { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
        ]
      },
    
      "Meeting Cancellation": {
         template: `
          Subject: Cancellation of {MeetingType} on {MeetingDate}
    
          Dear {AttendeeName},
    
          Unfortunately, we need to cancel the upcoming {MeetingType} scheduled for {MeetingDate} 
          at {MeetingTime} due to {Reason for Cancellation}.
           
          We apologize for any inconvenience this may cause.
    
          We are in the process of rescheduling the meeting and will notify you of the new date and time 
          as soon as possible. 
          If there are any urgent matters that need to be discussed, please do not hesitate to contact us.
    
          Thank you for your understanding.
    
          Best regards,
          {YourName}
          {YourPosition}
          {YourContactInformation}
        `,
        fields: [
          { "id": 'MeetingType', "label": 'Type of Meeting', "type": 'text' },
          { "id": 'MeetingDate', "label": 'Meeting Date', "type": 'date' },
          { "id": 'AttendeeName', "label": 'Attendee Name', "type": 'text' },
          { "id": 'MeetingTime', "label": 'Meeting Time', "type": 'time' },
          { "id": 'Reason for Cancellation', "label": 'Reason for Cancellation', "type": 'text' },
          { "id": 'YourName', "label": 'Your Name', "type": 'text' },
          { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
          { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
        ]
      },
    
      "Reschedule Request": {
         template: `
          Subject: Request to Reschedule {MeetingType} on {OriginalMeetingDate}
    
          Dear {AttendeeName},
    
          Due to {Reason for Rescheduling}, we kindly request to reschedule the {MeetingType} 
          originally planned for {OriginalMeetingDate} at {OriginalMeetingTime}.
           
          We apologize for any inconvenience this may cause.
    
          Please let us know your availability for the following alternative dates and times:
          - {NewDate1} at {NewTime1}
          - {NewDate2} at {NewTime2}
          - {NewDate3} at {NewTime3}
    
          We hope to find a suitable time that works for all parties. Thank you for your 
          understanding and flexibility.
    
          Best regards,
          {YourName}
          {YourPosition}
          {YourContactInformation}
        `,
        fields: [
          { "id": 'MeetingType', "label": 'Type of Meeting', "type": 'text' },
          { "id": 'OriginalMeetingDate', "label": 'Original Meeting Date', "type": 'date' },
          { "id": 'AttendeeName', "label": 'Attendee Name', "type": 'text' },
          { "id": 'OriginalMeetingTime', "label": 'Original Meeting Time', "type": 'time' },
          { "id": 'Reason for Rescheduling', "label": 'Reason for Rescheduling', "type": 'text' },
          { "id": 'NewDate1', "label": 'New Date 1', "type": 'date' },
          { "id": 'NewTime1', "label": 'New Time 1', "type": 'time' },
          { "id": 'NewDate2', "label": 'New Date 2', "type": 'date' },
          { "id": 'NewTime2', "label": 'New Time 2', "type": 'time' },
          { "id": 'NewDate3', "label": 'New Date 3', "type": 'date' },
          { "id": 'NewTime3', "label": 'New Time 3', "type": 'time' },
          { "id": 'YourName', "label": 'Your Name', "type": 'text' },
          { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
          { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
        ]
      },
    
      "Meeting Follow-Up": {
        "template": `
          Subject: Follow-Up on {MeetingType} Held on {MeetingDate}
    
          Dear {AttendeeName},
    
          Thank you for attending the {MeetingType} on {MeetingDate}. We appreciate your valuable 
          contributions and insights.
    
          **Key points discussed:**
          - {DiscussionPoint1}
          - {DiscussionPoint2}
          - {DiscussionPoint3}
    
          **Action items:**
          - {ActionItem1}: {ResponsiblePerson1} - Due by {DueDate1}
          - {ActionItem2}: {ResponsiblePerson2} - Due by {DueDate2}
          - {ActionItem3}: {ResponsiblePerson3} - Due by {DueDate3}
    
          If you have any questions or need further clarification on any of the topics, 
          please do not hesitate to reach out. We look forward to our continued collaboration and 
          achieving the goals discussed.
    
          Best regards,
          {YourName}
          {YourPosition}
          {YourContactInformation}
        `,
        "fields": [
          { "id": 'MeetingType', "label": 'Type of Meeting', "type": 'text' },
          { "id": 'MeetingDate', "label": 'Meeting Date', "type": 'date' },
          { "id": 'AttendeeName', "label": 'Attendee Name', "type": 'text' },
          { "id": 'DiscussionPoint1', "label": 'Discussion Point 1', "type": 'text' },
          { "id": 'DiscussionPoint2', "label": 'Discussion Point 2', "type": 'text' },
          { "id": 'DiscussionPoint3', "label": 'Discussion Point 3', "type": 'text' },
          { "id": 'ActionItem1', "label": 'Action Item 1', "type": 'text' },
          { "id": 'ResponsiblePerson1', "label": 'Responsible Person 1', "type": 'text' },
          { "id": 'DueDate1', "label": 'Due Date 1', "type": 'date' },
          { "id": 'ActionItem2', "label": 'Action Item 2', "type": 'text' },
          { "id": 'ResponsiblePerson2', "label": 'Responsible Person 2', "type": 'text' },
          { "id": 'DueDate2', "label": 'Due Date 2', "type": 'date' },
          { "id": 'ActionItem3', "label": 'Action Item 3', "type": 'text' },
          { "id": 'ResponsiblePerson3', "label": 'Responsible Person 3', "type": 'text' },
          { "id": 'DueDate3', "label": 'Due Date 3', "type": 'date' },
          { "id": 'YourName', "label": 'Your Name', "type": 'text' },
          { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
          { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' },
        ]
      }
    },


    "Financial Documents":{
      "Expense Report": {
         template: `
          Expense Report
          Report Date: {ReportDate}
          Prepared By: {EmployeeName}
          Department: {Department}
          
          Summary of Expenses:
          -----------------------------------------------------
          | Date       | Expense Category | Description        | Amount |
          -----------------------------------------------------
          | {ExpenseDate1} | {Category1}      | {Description1}     | {Amount1} |
          | {ExpenseDate2} | {Category2}      | {Description2}     | {Amount2} |
          | {ExpenseDate3} | {Category3}      | {Description3}     | {Amount3} |
          -----------------------------------------------------
          
          Total Amount: {TotalAmount}
          
          Approval:
          Manager: {ManagerName}
          Signature: ____________________
          
          Comments:
          {Comments}
        `,
        fields: [
          { "id": 'ReportDate', "label": 'Report Date', "type": 'date' },
          { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
          { "id": 'Department', "label": 'Department', "type": 'text' },
          { "id": 'ExpenseDate1', "label": 'Expense Date 1', "type": 'date' },
          { "id": 'Category1', "label": 'Category 1', "type": 'text' },
          { "id": 'Description1', "label": 'Description 1', "type": 'text' },
          { "id": 'Amount1', "label": 'Amount 1', "type": 'number' },
          { "id": 'ExpenseDate2', "label": 'Expense Date 2', "type": 'date' },
          { "id": 'Category2', "label": 'Category 2', "type": 'text' },
          { "id": 'Description2', "label": 'Description 2', "type": 'text' },
          { "id": 'Amount2', "label": 'Amount 2', "type": 'number' },
          { "id": 'ExpenseDate3', "label": 'Expense Date 3', "type": 'date' },
          { "id": 'Category3', "label": 'Category 3', "type": 'text' },
          { "id": 'Description3', "label": 'Description 3', "type": 'text' },
          { "id": 'Amount3', "label": 'Amount 3', "type": 'number' },
          { "id": 'TotalAmount', "label": 'Total Amount', "type": 'number' },
          { "id": 'ManagerName', "label": 'Manager Name', "type": 'text' },
          { "id": 'Comments', "label": 'Comments', "type": 'textarea' }
        ]
      },
    
      "Financial Statement": {
         template: `
          Financial Statement
          Period: {Period}
          Prepared By: {AccountantName}
          Date: {StatementDate}
          
          Overview:
          This financial statement provides a detailed summary of the company's financial status, 
          including assets, liabilities, income, and expenses for the specified period.
    
          Income Statement:
          -----------------------------------------------------
          | Revenue        | {Revenue}                        |
          -----------------------------------------------------
          | Expenses       | {Expenses}                       |
          -----------------------------------------------------
          | Net Income     | {NetIncome}                      |
          -----------------------------------------------------
          
          Balance Sheet:
          -----------------------------------------------------
          | Assets          | Liabilities                     |
          -----------------------------------------------------
          | {Assets}        | {Liabilities}                   |
          -----------------------------------------------------
          | Equity          | {Equity}                        |
          -----------------------------------------------------
          
          Cash Flow Statement:
          -----------------------------------------------------
          | Cash Inflow     | {CashInflow}                    |
          -----------------------------------------------------
          | Cash Outflow    | {CashOutflow}                   |
          -----------------------------------------------------
          | Net Cash Flow   | {NetCashFlow}                   |
          -----------------------------------------------------
          
          Comments:
          {Comments}
        `,
        fields: [
          { "id": 'Period', "label": 'Period', "type": 'text' },
          { "id": 'AccountantName', "label": 'Accountant Name', "type": 'text' },
          { "id": 'StatementDate', "label": 'Statement Date', "type": 'date' },
          { "id": 'Revenue', "label": 'Revenue', "type": 'number' },
          { "id": 'Expenses', "label": 'Expenses', "type": 'number' },
          { "id": 'NetIncome', "label": 'Net Income', "type": 'number' },
          { "id": 'Assets', "label": 'Assets', "type": 'number' },
          { "id": 'Liabilities', "label": 'Liabilities', "type": 'number' },
          { "id": 'Equity', "label": 'Equity', "type": 'number' },
          { "id": 'CashInflow', "label": 'Cash Inflow', "type": 'number' },
          { "id": 'CashOutflow', "label": 'Cash Outflow', "type": 'number' },
          { "id": 'NetCashFlow', "label": 'Net Cash Flow', "type": 'number' },
          { "id": 'Comments', "label": 'Comments', "type": 'textarea' }
        ]
      },
    
      "Budget Proposal": {
          template: `
          Budget Proposal
          Prepared By: {PreparedBy}
          Department: {Department}
          Proposal Date: {ProposalDate}
          Fiscal Year: {FiscalYear}
          
          Overview:
          This budget proposal outlines the projected income and expenditures for the upcoming 
          fiscal year. 
          It aims to allocate resources efficiently to achieve our department's goals and  
          support the overall objectives of the company.
    
          Income Projections:
          -----------------------------------------------------
          | Source               | Amount                      |
          -----------------------------------------------------
          | {IncomeSource1}      | {IncomeAmount1}             |
          | {IncomeSource2}      | {IncomeAmount2}             |
          | {IncomeSource3}      | {IncomeAmount3}             |
          -----------------------------------------------------
          | Total Income         | {TotalIncome}               |
          -----------------------------------------------------
          
          Expenditure Projections:
          -----------------------------------------------------
          | Category             | Amount                      |
          -----------------------------------------------------
          | {ExpenseCategory1}   | {ExpenseAmount1}            |
          | {ExpenseCategory2}   | {ExpenseAmount2}            |
          | {ExpenseCategory3}   | {ExpenseAmount3}            |
          -----------------------------------------------------
          | Total Expenditure    | {TotalExpenditure}          |
          -----------------------------------------------------
          
          Net Budget:
          -----------------------------------------------------
          | Net Income/Expenditure | {NetBudget}               |
          -----------------------------------------------------
          
          Justification and Comments:
          {Comments}
        `,
        fields: [
          { "id": 'PreparedBy', "label": 'Prepared By', "type": 'text' },
          { "id": 'Department', "label": 'Department', "type": 'text' },
          { "id": 'ProposalDate', "label": 'Proposal Date', "type": 'date' },
          { "id": 'FiscalYear', "label": 'Fiscal Year', "type": 'text' },
          { "id": 'IncomeSource1', "label": 'Income Source 1', "type": 'text' },
          { "id": 'IncomeAmount1', "label": 'Income Amount 1', "type": 'number' },
          { "id": 'IncomeSource2', "label": 'Income Source 2', "type": 'text' },
          { "id": 'IncomeAmount2', "label": 'Income Amount 2', "type": 'number' },
          { "id": 'IncomeSource3', "label": 'Income Source 3', "type": 'text' },
          { "id": 'IncomeAmount3', "label": 'Income Amount 3', "type": 'number' },
          { "id": 'TotalIncome', "label": 'Total Income', "type": 'number' },
          { "id": 'ExpenseCategory1', "label": 'Expense Category 1', "type": 'text' },
          { "id": 'ExpenseAmount1', "label": 'Expense Amount 1', "type": 'number' },
          { "id": 'ExpenseCategory2', "label": 'Expense Category 2', "type": 'text' },
          { "id": 'ExpenseAmount2', "label": 'Expense Amount 2', "type": 'number' },
          { "id": 'ExpenseCategory3', "label": 'Expense Category 3', "type": 'text' },
          { "id": 'ExpenseAmount3', "label": 'Expense Amount 3', "type": 'number' },
          { "id": 'TotalExpenditure', "label": 'Total Expenditure', "type": 'number' },
          { "id": 'NetBudget', "label": 'Net Budget', "type": 'number' },
          { "id": 'Comments', "label": 'Justification and Comments', "type": 'textarea' }
        ]
      },
    
      "Reimbursement Request": {
          template: `
          Reimbursement Request
          Request Date: {RequestDate}
          Employee Name: {EmployeeName}
          Department: {Department}
          
          Description of Expenses:
          -----------------------------------------------------
          | Date       | Description           | Amount         |
          -----------------------------------------------------
          | {ExpenseDate1} | {Description1}       | {Amount1}       |
          | {ExpenseDate2} | {Description2}       | {Amount2}       |
          | {ExpenseDate3} | {Description3}       | {Amount3}       |
          -----------------------------------------------------
          
          Total Amount: {TotalAmount}
          
          Approved By: {ApproverName}
          Signature: ____________________
          
          Comments:
          {Comments}
        `,
          fields: [
          { "id": 'RequestDate', "label": 'Request Date', "type": 'date' },
          { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
          { "id": 'Department', "label": 'Department', "type": 'text' },
          { "id": 'ExpenseDate1', "label": 'Expense Date 1', "type": 'date' },
          { "id": 'Description1', "label": 'Description 1', "type": 'text' },
          { "id": 'Amount1', "label": 'Amount 1', "type": 'number' },
          { "id": 'ExpenseDate2', "label": 'Expense Date 2', "type": 'date' },
          { "id": 'Description2', "label": 'Description 2', "type": 'text' },
          { "id": 'Amount2', "label": 'Amount 2', "type": 'number' },
          { "id": 'ExpenseDate3', "label": 'Expense Date 3', "type": 'date' },
          { "id": 'Description3', "label": 'Description 3', "type": 'text' },
          { "id": 'Amount3', "label": 'Amount 3', "type": 'number' },
          { "id": 'TotalAmount', "label": 'Total Amount', "type": 'number' },
          { "id": 'ApproverName', "label": 'Approver Name', "type": 'text' },
          { "id": 'Comments', "label": 'Comments', "type": 'textarea' }
        ]
      },
    
      "Payment Reminder": {
          template: `
          Payment Reminder
          Date: {ReminderDate}
          To: {ClientName}
          Invoice Number: {InvoiceNumber}
          Invoice Date: {InvoiceDate}
          Due Date: {DueDate}
          Amount Due: {AmountDue}
          
          Dear {ClientName},
    
          This is a friendly reminder that your payment of {AmountDue} for Invoice #{InvoiceNumber} 
          is overdue. 
          The invoice was issued on {InvoiceDate} and the due date was {DueDate}. 
          We kindly request that you settle 
          the outstanding amount as soon as possible to avoid any late fees.
    
          If you have already made the payment, please disregard this reminder. Otherwise, 
          please arrange for payment 
          at your earliest convenience.
    
          Payment Details:
          -----------------------------------------------------
          | Bank Name        | {BankName}                      |
          -----------------------------------------------------
          | Account Number   | {AccountNumber}                 |
          -----------------------------------------------------
          | Payment Method   | {PaymentMethod}                 |
          -----------------------------------------------------
          
          Thank you for your attention to this matter.
    
          Sincerely,
          {CompanyName}
        `,
        fields: [
          { "id": 'ReminderDate', "label": 'Reminder Date', "type": 'date' },
          { "id": 'ClientName', "label": 'Client Name', "type": 'text' },
          { "id": 'InvoiceNumber', "label": 'Invoice Number', "type": 'text' },
          { "id": 'InvoiceDate', "label": 'Invoice Date', "type": 'date' },
          { "id": 'DueDate', "label": 'Due Date', "type": 'date' },
          { "id": 'AmountDue', "label": 'Amount Due', "type": 'number' },
          { "id": 'BankName', "label": 'Bank Name', "type": 'text' },
          { "id": 'AccountNumber', "label": 'Account Number', "type": 'text' },
          { "id": 'PaymentMethod', "label": 'Payment Method', "type": 'text' },
          { "id": 'CompanyName', "label": 'Company Name', "type": 'text' }
        ]
      },
    
      "Audit Report": {
          template: `
          Audit Report
          Report Date: {ReportDate}
          Auditor: {AuditorName}
          Department: {Department}
          Period Audited: {PeriodAudited}
          
          Overview:
          This audit report presents the findings, conclusions, and recommendations from the audit 
          conducted on the financial activities and 
          internal controls of the department for the period from {PeriodAudited}.
    
          Key Findings:
          1. Finding 1: {Finding1}
          2. Finding 2: {Finding2}
          3. Finding 3: {Finding3}
          
          Recommendations:
          1. Recommendation 1: {Recommendation1}
          2. Recommendation 2: {Recommendation2}
          3. Recommendation 3: {Recommendation3}
          
          Conclusion:
          The audit reveals that {Conclusion}. The department should take necessary actions to address 
          the recommendations to ensure compliance and efficiency.
          
    
          Approved By: {ApproverName}
          Signature: ____________________
        `,
          fields: [
          { "id": 'ReportDate', "label": 'Report Date', "type": 'date' },
          { "id": 'AuditorName', "label": 'Auditor Name', "type": 'text' },
          { "id": 'Department', "label": 'Department', "type": 'text' },
          { "id": 'PeriodAudited', "label": 'Period Audited', "type": 'text' },
          { "id": 'Finding1', "label": 'Finding 1', "type": 'textarea' },
          { "id": 'Finding2', "label": 'Finding 2', "type": 'textarea' },
          { "id": 'Finding3', "label": 'Finding 3', "type": 'textarea' },
          { "id": 'Recommendation1', "label": 'Recommendation 1', "type": 'textarea' },
          { "id": 'Recommendation2', "label": 'Recommendation 2', "type": 'textarea' },
          { "id": 'Recommendation3', "label": 'Recommendation 3', "type": 'textarea' },
          { "id": 'Conclusion', "label": 'Conclusion', "type": 'textarea' },
          { "id": 'ApproverName', "label": 'Approver Name', "type": 'text' }
        ]
      },
      "Tax Documentation": {
      template: `
      Date: {Date}

      To: {Recipient Name}
      Address: {Recipient Address}

      Subject: Tax Documentation for {Tax Year/Period}

      Dear {Recipient Name},

      I am writing to provide the necessary tax documentation for the period of {Tax Year/Period}.
       This documentation is being provided to support the accurate preparation and filing of my 
       tax returns.

      Tax Information Details:

      - Taxpayer Name: {Your Name}
      - Tax Identification Number: {Your TIN/SSN}
      - Tax Year/Period: {Tax Year/Period}

      Attached Documents:

      1. Income Statements: {Description of attached income statements}
      2. Expense Reports: {Description of attached expense reports}
      3. Receipts and Invoices: {Description of attached receipts and invoices}
      4. Other Relevant Documents: {Description of other documents}

      Please review the enclosed documents and let me know if any additional information is required. 
      If you have any questions or need further clarification, feel free to contact me 
      at {Your Phone Number} or {Your Email Address}.

      Thank you for your attention to this matter.

      Sincerely,

      {Your Name}
      {Your Address}
      {Your Contact Number}
      {Your Email Address}
    `,
      fields: [
      { "id": 'Date', "label": 'Date', "type": 'date' },
      { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
      { "id": 'RecipientAddress', "label": 'Recipient Address', "type": 'text' },
      { "id": 'TaxYearPeriod', "label": 'Tax Year/Period', "type": 'text' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourTIN', "label": 'Your TIN/SSN', "type": 'text' },
      { "id": 'DescriptionIncomeStatements', "label": 'Description of Attached Income Statements', "type": 'textarea' },
      { "id": 'DescriptionExpenseReports', "label": 'Description of Attached Expense Reports', "type": 'textarea' },
      { "id": 'DescriptionReceiptsInvoices', "label": 'Description of Attached Receipts and Invoices', "type": 'textarea' },
      { "id": 'DescriptionOtherDocuments', "label": 'Description of Other Documents', "type": 'textarea' },
      { "id": 'YourPhoneNumber', "label": 'Your Phone Number', "type": 'text' },
      { "id": 'YourEmailAddress', "label": 'Your Email Address', "type": 'email' }
    ]
  }
    },

    "Legal and Compliance":{
       "Confidentiality Agreement": {
      template: `
      Confidentiality Agreement
      Agreement Date: {AgreementDate}
      Parties Involved: {Party1} and {Party2}
      
      1. **Purpose of Agreement:**
         This Confidentiality Agreement (the "Agreement") is entered into to protect the 
         confidential information disclosed between the parties involved.

      2. **Definition of Confidential Information:**
         Confidential Information includes all written, electronic, or oral information disclosed by 
         either party that is not publicly known.

      3. **Obligations of the Receiving Party:**
         The Receiving Party agrees to:
         - Maintain the confidentiality of the information with at least the same degree of care 
         as it would use for its own confidential information.
         
         - Not disclose the information to any third party without prior written consent from 
         the Disclosing Party.
         - Use the information solely for the purpose for which it was disclosed.

      4. **Exclusions from Confidential Information:**
         The obligations of confidentiality do not apply to information that:
         - Was already known to the Receiving Party without an obligation of confidentiality.
         - Is or becomes publicly available through no fault of the Receiving Party.
         - Is independently developed by the Receiving Party without use of or reference to the 
         Disclosing Party's Confidential Information.

      5. **Term and Termination:**
         This Agreement shall remain in effect for a period of {Duration} years from the Agreement Date 
         or until terminated by mutual written consent of both parties.
         

      6. **Governing Law:**
         This Agreement shall be governed by and construed in accordance with the laws of {Jurisdiction}.

      7. **Signatures:**
         {Party1} Signature: ____________________
         {Party2} Signature: ____________________

      Comments:
      {Comments}
    `,
      fields: [
      { "id": 'AgreementDate', "label": 'Agreement Date', "type": 'date' },
      { "id": 'Party1', "label": 'Party 1', "type": 'text' },
      { "id": 'Party2', "label": 'Party 2', "type": 'text' },
      { "id": 'Duration', "label": 'Duration', "type": 'text' },
      { "id": 'Jurisdiction', "label": 'Jurisdiction', "type": 'text' },
      { "id": 'Comments', "label": 'Comments', "type": 'textarea' }
    ]
  },

  "Non-Disclosure Agreement (NDA)": {
      template: `
      Non-Disclosure Agreement (NDA)
      Agreement Date: {AgreementDate}
      Disclosing Party: {DisclosingParty}
      Receiving Party: {ReceivingParty}

      1. **Purpose:**
         This NDA is intended to protect the confidential information shared between the Disclosing 
         Party and the Receiving Party.

      2. **Confidential Information:**
         Confidential Information refers to all proprietary information disclosed that is not generally
          known to the public.

      3. **Obligations of Receiving Party:**
         - To keep the information confidential and not disclose it to any third party.
         - To use the information solely for the purpose intended by the Disclosing Party.
         - To return or destroy all Confidential Information upon request or termination of the Agreement.

      4. **Exclusions:**
         The obligations do not apply to information that:
         - Was publicly available at the time of disclosure.
         - Was known to the Receiving Party prior to the disclosure.
         - Is disclosed under legal compulsion.

      5. **Term:**
         This NDA is effective from the Agreement Date and remains in force for a period of {Duration} years.

      6. **Jurisdiction:**
         The Agreement is governed by the laws of {Jurisdiction}.

      7. **Signatures:**
         Disclosing Party Signature: ____________________
         Receiving Party Signature: ____________________

      Comments:
      {Comments}
    `,
      fields: [
      { "id": 'AgreementDate', "label": 'Agreement Date', "type": 'date' },
      { "id": 'DisclosingParty', "label": 'Disclosing Party', "type": 'text' },
      { "id": 'ReceivingParty', "label": 'Receiving Party', "type": 'text' },
      { "id": 'Duration', "label": 'Duration', "type": 'text' },
      { "id": 'Jurisdiction', "label": 'Jurisdiction', "type": 'text' },
      { "id": 'Comments', "label": 'Comments', "type": 'textarea' }
    ]
  },

  "Contract Agreement": {
      template: `
      Contract Agreement
      Contract Date: {ContractDate}
      Parties: {Party1} and {Party2}

      1. **Purpose:**
         This Contract Agreement outlines the terms and conditions agreed upon between the parties.

      2. **Scope of Work:**
         Describe the services or goods to be provided.

      3. **Payment Terms:**
         - Total Amount: {TotalAmount}
         - Payment Schedule: {PaymentSchedule}

      4. **Responsibilities of Each Party:**
         - {Party1} Responsibilities: {Responsibilities1}
         - {Party2} Responsibilities: {Responsibilities2}

      5. **Term and Termination:**
         The contract commences on {StartDate} and continues until {EndDate} or until terminated 
         as per the terms.

      6. **Dispute Resolution:**
         Any disputes arising from this Agreement shall be resolved through {DisputeResolutionMethod}.

      7. **Signatures:**
         {Party1} Signature: ____________________
         {Party2} Signature: ____________________

      Comments:
      {Comments}
    `,
      fields: [
      { "id": 'ContractDate', "label": 'Contract Date', "type": 'date' },
      { "id": 'Party1', "label": 'Party 1', "type": 'text' },
      { "id": 'Party2', "label": 'Party 2', "type": 'text' },
      { "id": 'TotalAmount', "label": 'Total Amount', "type": 'number' },
      { "id": 'PaymentSchedule', "label": 'Payment Schedule', "type": 'text' },
      { "id": 'Responsibilities1', "label": 'Party 1 Responsibilities', "type": 'textarea' },
      { "id": 'Responsibilities2', "label": 'Party 2 Responsibilities', "type": 'textarea' },
      { "id": 'StartDate', "label": 'Start Date', "type": 'date' },
      { "id": 'EndDate', "label": 'End Date', "type": 'date' },
      { "id": 'DisputeResolutionMethod', "label": 'Dispute Resolution Method', "type": 'text' },
      { "id": 'Comments', "label": 'Comments', "type": 'textarea' }
    ]
  },

  "Policy Compliance Notice": {
      template: `
      Policy Compliance Notice
      Date: {NoticeDate}
      To: {EmployeeName}
      Department: {Department}

      1. **Subject:**
         This notice is to inform you of the need to comply with company policies regarding {PolicyArea}.

      2. **Policy Details:**
         - Policy Name: {PolicyName}
         - Description: {PolicyDescription}
         - Compliance Requirements: {ComplianceRequirements}

      3. **Action Required:**
         You are required to {ActionRequired} by {ComplianceDeadline}.

      4. **Consequences of Non-Compliance:**
         Failure to comply with this policy may result in {Consequences}.

      5. **Acknowledgment:**
         Please sign below to acknowledge receipt of this notice and understanding of the compliance 
         requirements.

      Acknowledged By: ____________________
      Date: {AcknowledgmentDate}
    `,
      fields: [
      { "id": 'NoticeDate', "label": 'Notice Date', "type": 'date' },
      { "id": 'EmployeeName', "label": 'Employee Name', "type": 'text' },
      { "id": 'Department', "label": 'Department', "type": 'text' },
      { "id": 'PolicyArea', "label": 'Policy Area', "type": 'text' },
      { "id": 'PolicyName', "label": 'Policy Name', "type": 'text' },
      { "id": 'PolicyDescription', "label": 'Policy Description', "type": 'textarea' },
      { "id": 'ComplianceRequirements', "label": 'Compliance Requirements', "type": 'textarea' },
      { "id": 'ActionRequired', "label": 'Action Required', "type": 'textarea' },
      { "id": 'ComplianceDeadline', "label": 'Compliance Deadline', "type": 'date' },
      { "id": 'Consequences', "label": 'Consequences of Non-Compliance', "type": 'textarea' },
      { "id": 'AcknowledgmentDate', "label": 'Acknowledgment Date', "type": 'date' }
    ]
  },

  "Data Protection Notice": {
      template: `
      Data Protection Notice
      Date: {NoticeDate}
      To: {RecipientName}
      From: {SenderName}

      1. **Purpose:**
         This notice informs you about our data protection practices regarding your personal data.

      2. **Data Collected:**
         We collect the following types of data: {DataTypesCollected}.

      3. **Purpose of Data Collection:**
         Your data is collected for the following purposes: {DataCollectionPurpose}.

      4. **Data Protection Measures:**
         We implement the following measures to protect your data: {DataProtectionMeasures}.

      5. **Rights and Access:**
         You have the right to {Rights} and can request access to your data by contacting us 
         at {ContactInformation}.

      6. **Changes to this Notice:**
         Any changes to this notice will be communicated to you through {CommunicationMethod}.

      7. **Contact Information:**
         If you have any questions regarding this notice, please contact {ContactPerson} at {ContactEmail}.

      Signature: ____________________
    `,
      fields: [
      { "id": 'NoticeDate', "label": 'Notice Date', "type": 'date' },
      { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
      { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
      { "id": 'DataTypesCollected', "label": 'Data Types Collected', "type": 'textarea' },
      { "id": 'DataCollectionPurpose', "label": 'Data Collection Purpose', "type": 'textarea' },
      { "id": 'DataProtectionMeasures', "label": 'Data Protection Measures', "type": 'textarea' },
      { "id": 'Rights', "label": 'Rights', "type": 'textarea' },
      { "id": 'ContactInformation', "label": 'Contact Information for Data Access', "type": 'text' },
      { "id": 'CommunicationMethod', "label": 'Communication Method for Changes', "type": 'text' },
      { "id": 'ContactPerson', "label": 'Contact Person', "type": 'text' },
      { "id": 'ContactEmail', "label": 'Contact Email', "type": 'email' }
    ]
  },

  "Compliance Audit Notification": {
      template: `
      Compliance Audit Notification
      Date: {NotificationDate}
      To: {Department}
      From: {AuditTeam}

      1. **Subject:**
         Notification of upcoming compliance audit for the period {AuditPeriod}.

      2. **Purpose of Audit:**
         The purpose of the audit is to evaluate {AuditPurpose}.

      3. **Scope of Audit:**
         The audit will cover the following areas: {AuditScope}.

      4. **Audit Schedule:**
         - Start Date: {StartDate}
         - End Date: {EndDate}

      5. **Required Documentation:**
         Please prepare the following documents for review: {RequiredDocuments}.

      6. **Contact Information:**
         For any queries, contact {AuditCoordinator} at {ContactEmail}.

      7. **Acknowledgment:**
         Please acknowledge receipt of this notification and readiness for the audit.

      Acknowledged By: ____________________
      Date: {AcknowledgmentDate}
    `,
      fields: [
      { "id": 'NotificationDate', "label": 'Notification Date', "type": 'date' },
      { "id": 'Department', "label": 'Department', "type": 'text' },
      { "id": 'AuditTeam', "label": 'Audit Team', "type": 'text' },
      { "id": 'AuditPeriod', "label": 'Audit Period', "type": 'text' },
      { "id": 'AuditPurpose', "label": 'Audit Purpose', "type": 'textarea' },
      { "id": 'AuditScope', "label": 'Audit Scope', "type": 'textarea' },
      { "id": 'StartDate', "label": 'Audit Start Date', "type": 'date' },
      { "id": 'EndDate', "label": 'Audit End Date', "type": 'date' },
      { "id": 'RequiredDocuments', "label": 'Required Documents', "type": 'textarea' },
      { "id": 'AuditCoordinator', "label": 'Audit Coordinator', "type": 'text' },
      { "id": 'ContactEmail', "label": 'Contact Email', "type": 'email' },
      { "id": 'AcknowledgmentDate', "label": 'Acknowledgment Date', "type": 'date' }
    ]
  },

  "Legal Notice": {
      template: `
      Legal Notice
      Date: {NoticeDate}
      To: {RecipientName}
      From: {SenderName}

      1. **Subject:**
         Legal notice regarding {SubjectMatter}.

      2. **Details of the Notice:**
         This notice serves to inform you of {Details}.

      3. **Actions Required:**
         You are required to {RequiredActions} by {ResponseDeadline}.

      4. **Consequences of Non-Compliance:**
         Failure to comply may result in {Consequences}.

      5. **Contact Information:**
         For further information or clarification, contact {ContactPerson} at {ContactEmail}.

      6. **Acknowledgment:**
         Please acknowledge receipt of this notice and your understanding of its contents.

      Acknowledged By: ____________________
      Date: {AcknowledgmentDate}
    `,
      fields: [
      { "id": 'NoticeDate', "label": 'Notice Date', "type": 'date' },
      { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
      { "id": 'SenderName', "label": 'Sender Name', "type": 'text' },
      { "id": 'SubjectMatter', "label": 'Subject Matter', "type": 'text' },
      { "id": 'Details', "label": 'Details of the Notice', "type": 'textarea' },
      { "id": 'RequiredActions', "label": 'Actions Required', "type": 'textarea' },
      { "id": 'ResponseDeadline', "label": 'Response Deadline', "type": 'date' },
      { "id": 'Consequences', "label": 'Consequences of Non-Compliance', "type": 'textarea' },
      { "id": 'ContactPerson', "label": 'Contact Person', "type": 'text' },
      { "id": 'ContactEmail', "label": 'Contact Email', "type": 'email' },
      { "id": 'AcknowledgmentDate', "label": 'Acknowledgment Date', "type": 'date' }
    ]
  }

    },

    "Complaint Letters":{
    "Complaint Against Police Misconduct": {
      template: `
      Complaint Against Police Misconduct
      Date: {ComplaintDate}
      To: {PoliceStationName}
      Address: {PoliceStationAddress}

      Subject: Complaint Against Police Misconduct

      Dear Sir/Madam,

      I am writing to formally file a complaint against an officer of your department for alleged 
      misconduct that occurred on {IncidentDate} at {IncidentLocation}. 
      The details of the incident are as follows:

      **Officer Details:**
      Name: {OfficerName}
      Badge Number: {OfficerBadgeNumber} (if known)

      **Incident Description:**
      Describe the nature of the misconduct, including the actions of the officer, any verbal 
      or physical abuse, and how it impacted you.

      **Witnesses:**
      List any witnesses to the incident, along with their contact details if possible.

      **Evidence:**
      Provide any evidence you have related to the incident (e.g., photographs, video recordings, medical reports).

      **Desired Action:**
      State what you would like to happen as a result of this complaint (e.g., investigation, disciplinary action).

      I request that this complaint be investigated thoroughly and that appropriate action be 
      taken against the officer involved. Please inform me of the outcome of this investigation.

      Sincerely,
      {YourName}
      {YourAddress}
      {YourContactNumber}
      {YourEmail}
    `,
      fields: [
      { "id": 'ComplaintDate', "label": 'Complaint Date', "type": 'date' },
      { "id": 'PoliceStationName', "label": 'Police Station Name', "type": 'text' },
      { "id": 'PoliceStationAddress', "label": 'Police Station Address', "type": 'text' },
      { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
      { "id": 'IncidentLocation', "label": 'Incident Location', "type": 'text' },
      { "id": 'OfficerName', "label": 'Officer Name', "type": 'text' },
      { "id": 'OfficerBadgeNumber', "label": 'Officer Badge Number', "type": 'text' },
      { "id": 'Witnesses', "label": 'Witnesses', "type": 'textarea' },
      { "id": 'Evidence', "label": 'Evidence', "type": 'textarea' },
      { "id": 'DesiredAction', "label": 'Desired Action', "type": 'textarea' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourAddress', "label": 'Your Address', "type": 'text' },
      { "id": 'YourContactNumber', "label": 'Your Contact Number', "type": 'text' },
      { "id": 'YourEmail', "label": 'Your Email', "type": 'email' }
    ]
  },

  "Complaint About Delayed Investigation": {
      template: `
      Complaint About Delayed Investigation
      Date: {ComplaintDate}
      To: {PoliceStationName}
      Address: {PoliceStationAddress}

      Subject: Complaint About Delayed Investigation

      Dear Sir/Madam,

      I am writing to express my concern regarding the delay in the investigation of my complaint 
      filed on {OriginalComplaintDate} regarding {IncidentDetails}.

      **Complaint Reference Number:** {ComplaintReferenceNumber}

      It has been {NumberOfDays} days since the complaint was lodged, and I have yet to receive 
      any updates or progress reports. 
      The lack of communication is causing significant distress and inconvenience.

      I kindly request that you expedite the investigation and provide me with a status update 
      at your earliest convenience.

      Sincerely,
      {YourName}
      {YourAddress}
      {YourContactNumber}
      {YourEmail}
    `,
      fields: [
      { "id": 'ComplaintDate', "label": 'Complaint Date', "type": 'date' },
      { "id": 'PoliceStationName', "label": 'Police Station Name', "type": 'text' },
      { "id": 'PoliceStationAddress', "label": 'Police Station Address', "type": 'text' },
      { "id": 'OriginalComplaintDate', "label": 'Original Complaint Date', "type": 'date' },
      { "id": 'IncidentDetails', "label": 'Incident Details', "type": 'textarea' },
      { "id": 'ComplaintReferenceNumber', "label": 'Complaint Reference Number', "type": 'text' },
      { "id": 'NumberOfDays', "label": 'Number of Days Since Complaint', "type": 'number' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourAddress', "label": 'Your Address', "type": 'text' },
      { "id": 'YourContactNumber', "label": 'Your Contact Number', "type": 'text' },
      { "id": 'YourEmail', "label": 'Your Email', "type": 'email' }
    ]
  },

  "Complaint About Unlawful Arrest": {
      template: `
      Complaint About Unlawful Arrest
      Date: {ComplaintDate}
      To: {PoliceStationName}
      Address: {PoliceStationAddress}

      Subject: Complaint About Unlawful Arrest

      Dear Sir/Madam,

      I am writing to formally complain about an unlawful arrest that occurred on {ArrestDate} 
      at {ArrestLocation}. The details are as follows:

      **Arresting Officer:**
      Name: {OfficerName}
      Badge Number: {OfficerBadgeNumber} (if known)

      **Details of the Arrest:**
      Describe the circumstances of the arrest, including any reasons given by the officers, 
      how the arrest was conducted, and any violations of your rights.

      **Witnesses:**
      Provide details of any witnesses who were present during the arrest.

      **Evidence:**
      Attach or describe any evidence related to the unlawful arrest.

      I request that an investigation be conducted into this matter and that any necessary actions be 
      taken to address the misconduct.

      Sincerely,
      {YourName}
      {YourAddress}
      {YourContactNumber}
      {YourEmail}
    `,
      fields: [
      { "id": 'ComplaintDate', "label": 'Complaint Date', "type": 'date' },
      { "id": 'PoliceStationName', "label": 'Police Station Name', "type": 'text' },
      { "id": 'PoliceStationAddress', "label": 'Police Station Address', "type": 'text' },
      { "id": 'ArrestDate', "label": 'Arrest Date', "type": 'date' },
      { "id": 'ArrestLocation', "label": 'Arrest Location', "type": 'text' },
      { "id": 'OfficerName', "label": 'Officer Name', "type": 'text' },
      { "id": 'OfficerBadgeNumber', "label": 'Officer Badge Number', "type": 'text' },
      { "id": 'Witnesses', "label": 'Witnesses', "type": 'textarea' },
      { "id": 'Evidence', "label": 'Evidence', "type": 'textarea' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourAddress', "label": 'Your Address', "type": 'text' },
      { "id": 'YourContactNumber', "label": 'Your Contact Number', "type": 'text' },
      { "id": 'YourEmail', "label": 'Your Email', "type": 'email' }
    ]
  },

  "Complaint About Police Negligence": {
      template: `
      Complaint About Police Negligence
      Date: {ComplaintDate}
      To: {PoliceStationName}
      Address: {PoliceStationAddress}

      Subject: Complaint About Police Negligence

      Dear Sir/Madam,

      I am writing to file a complaint regarding police negligence that I experienced on 
      {IncidentDate} at {IncidentLocation}. 
      The details of the negligence are as follows:

      **Incident Description:**
      Provide a detailed description of the negligence, including how the police failed to 
      act appropriately or respond to your request for assistance.

      **Officer Details:**
      Name: {OfficerName}
      Badge Number: {OfficerBadgeNumber} (if known)

      **Evidence:**
      Provide any evidence related to the negligence (e.g., recordings, witness statements).

      **Desired Action:**
      Describe what actions you wish to see taken in response to this complaint.

      I urge you to investigate this matter thoroughly and take appropriate measures to address 
      the negligence and improve service standards.

      Sincerely,
      {YourName}
      {YourAddress}
      {YourContactNumber}
      {YourEmail}
    `,
      fields: [
      { "id": 'ComplaintDate', "label": 'Complaint Date', "type": 'date' },
      { "id": 'PoliceStationName', "label": 'Police Station Name', "type": 'text' },
      { "id": 'PoliceStationAddress', "label": 'Police Station Address', "type": 'text' },
      { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
      { "id": 'IncidentLocation', "label": 'Incident Location', "type": 'text' },
      { "id": 'OfficerName', "label": 'Officer Name', "type": 'text' },
      { "id": 'OfficerBadgeNumber', "label": 'Officer Badge Number', "type": 'text' },
      { "id": 'Evidence', "label": 'Evidence', "type": 'textarea' },
      { "id": 'DesiredAction', "label": 'Desired Action', "type": 'textarea' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourAddress', "label": 'Your Address', "type": 'text' },
      { "id": 'YourContactNumber', "label": 'Your Contact Number', "type": 'text' },
      { "id": 'YourEmail', "label": 'Your Email', "type": 'email' }
    ]
  },

  "Complaint About Police Brutality": {
      template: `
      Complaint About Police Brutality
      Date: {ComplaintDate}
      To: {PoliceStationName}
      Address: {PoliceStationAddress}

      Subject: Complaint About Police Brutality

      Dear Sir/Madam,

      I am writing to lodge a complaint concerning police brutality that occurred on {IncidentDate} 
      at {IncidentLocation}. 
      The details of the incident are as follows:

      **Officer Details:**
      Name: {OfficerName}
      Badge Number: {OfficerBadgeNumber} (if known)

      **Incident Description:**
      Provide a detailed account of the brutality experienced, including any physical violence or 
      excessive force used by the officers.
      

      **Witnesses:**
      List any witnesses to the incident, including their contact details.

      **Evidence:**
      Attach or describe any evidence such as medical reports, photographs, or video recordings of 
      the brutality.

      **Desired Action:**
      State your expectations regarding the investigation and possible outcomes.

      I request that you take immediate action to investigate this matter and hold the responsible 
      officers accountable for their actions.
      

      Sincerely,
      {YourName}
      {YourAddress}
      {YourContactNumber}
      {YourEmail}
    `,
      fields: [
      { "id": 'ComplaintDate', "label": 'Complaint Date', "type": 'date' },
      { "id": 'PoliceStationName', "label": 'Police Station Name', "type": 'text' },
      { "id": 'PoliceStationAddress', "label": 'Police Station Address', "type": 'text' },
      { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
      { "id": 'IncidentLocation', "label": 'Incident Location', "type": 'text' },
      { "id": 'OfficerName', "label": 'Officer Name', "type": 'text' },
      { "id": 'OfficerBadgeNumber', "label": 'Officer Badge Number', "type": 'text' },
      { "id": 'Witnesses', "label": 'Witnesses', "type": 'textarea' },
      { "id": 'Evidence', "label": 'Evidence', "type": 'textarea' },
      { "id": 'DesiredAction', "label": 'Desired Action', "type": 'textarea' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourAddress', "label": 'Your Address', "type": 'text' },
      { "id": 'YourContactNumber', "label": 'Your Contact Number', "type": 'text' },
      { "id": 'YourEmail', "label": 'Your Email', "type": 'email' }
    ]
  },

  "Complaint About Police Harassment": {
      template: `
      Complaint About Police Harassment
      Date: {ComplaintDate}
      To: {PoliceStationName}
      Address: {PoliceStationAddress}

      Subject: Complaint About Police Harassment

      Dear Sir/Madam,

      I am writing to report an instance of harassment by police officers that took place 
      on {IncidentDate} at {IncidentLocation}. 
      
      The specifics of the harassment are detailed below:

      **Officer Details:**
      Name: {OfficerName}
      Badge Number: {OfficerBadgeNumber} (if known)

      **Incident Description:**
      Describe the harassment, including any inappropriate behavior, repeated contact, or 
      unwarranted attention from the officers.
      

      **Witnesses:**
      Include the names and contact details of any witnesses who observed the harassment.

      **Evidence:**
      Attach or describe any evidence related to the harassment (e.g., recordings, witness statements).

      **Desired Action:**
      Specify the action you expect to be taken as a result of this complaint.

      I urge you to investigate this complaint thoroughly and address the behavior of the 
      involved officers.

      Sincerely,
      {YourName}
      {YourAddress}
      {YourContactNumber}
      {YourEmail}
    `,
      fields: [
      { "id": 'ComplaintDate', "label": 'Complaint Date', "type": 'date' },
      { "id": 'PoliceStationName', "label": 'Police Station Name', "type": 'text' },
      { "id": 'PoliceStationAddress', "label": 'Police Station Address', "type": 'text' },
      { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
      { "id": 'IncidentLocation', "label": 'Incident Location', "type": 'text' },
      { "id": 'OfficerName', "label": 'Officer Name', "type": 'text' },
      { "id": 'OfficerBadgeNumber', "label": 'Officer Badge Number', "type": 'text' },
      { "id": 'Witnesses', "label": 'Witnesses', "type": 'textarea' },
      { "id": 'Evidence', "label": 'Evidence', "type": 'textarea' },
      { "id": 'DesiredAction', "label": 'Desired Action', "type": 'textarea' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourAddress', "label": 'Your Address', "type": 'text' },
      { "id": 'YourContactNumber', "label": 'Your Contact Number', "type": 'text' },
      { "id": 'YourEmail', "label": 'Your Email', "type": 'email' }
    ]
  },

  "Complaint About Negligent Response": {
      template: `
      Complaint About Negligent Response
      Date: {ComplaintDate}
      To: {PoliceStationName}
      Address: {PoliceStationAddress}

      Subject: Complaint About Negligent Response

      Dear Sir/Madam,

      I am writing to file a complaint about the negligent response to my emergency call 
       on {IncidentDate}.
       The details of the response are as follows:

      **Incident Description:**
      Describe the nature of the emergency, the response delay, and any negligence observed during 
      the police response.

      **Call Details:**
      Call Date and Time: {CallDateTime}
      Reference Number (if available): {CallReferenceNumber}

      **Witnesses:**
      Provide details of any witnesses who can corroborate the response time or negligence.

      **Evidence:**
      Attach or describe any evidence that supports your complaint (e.g., call records, witness statements).

      **Desired Action:**
      Explain what actions you believe should be taken to address the negligent response.

      I request that this matter be reviewed, and appropriate measures be taken to ensure timely and 
      effective responses to emergency calls.

      Sincerely,
      {YourName}
      {YourAddress}
      {YourContactNumber}
      {YourEmail}
    `,
      fields: [
      { "id": 'ComplaintDate', "label": 'Complaint Date', "type": 'date' },
      { "id": 'PoliceStationName', "label": 'Police Station Name', "type": 'text' },
      { "id": 'PoliceStationAddress', "label": 'Police Station Address', "type": 'text' },
      { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
      { "id": 'CallDateTime', "label": 'Call Date and Time', "type": 'datetime-local' },
      { "id": 'CallReferenceNumber', "label": 'Call Reference Number', "type": 'text' },
      { "id": 'Witnesses', "label": 'Witnesses', "type": 'textarea' },
      { "id": 'Evidence', "label": 'Evidence', "type": 'textarea' },
      { "id": 'DesiredAction', "label": 'Desired Action', "type": 'textarea' },
      { "id": 'YourName', "label": 'Your Name', "type": 'text' },
      { "id": 'YourAddress', "label": 'Your Address', "type": 'text' },
      { "id": 'YourContactNumber', "label": 'Your Contact Number', "type": 'text' },
      { "id": 'YourEmail', "label": 'Your Email', "type": 'email' }
    ]
  },
    },

    "Request Letters":{
      "Leave Request": {
       template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company: {Company Name}
        Address: {Company Address}

        Subject: Leave Request for {Leave Type}

        Dear {Recipient Name},

        I am writing to formally request leave from work for {Leave Duration}, starting 
        from {Start Date} to {End Date}. The reason for this leave is {Reason for Leave}. I have ensured 
        that all my responsibilities are covered during my absence and have briefed {Colleague's Name} 
        on the ongoing projects.

        **Details:**
        - **Leave Type:** {Leave Type}
        - **Leave Duration:** {Leave Duration}
        - **Start Date:** {Start Date}
        - **End Date:** {End Date}
        - **Reason for Leave:** {Reason for Leave}
        - **Alternate Contact:** {Colleague's Name and Contact Information}

        I would be grateful if you could approve my request at your earliest convenience. Please let me 
        know if any additional information is required.

        Thank you for considering my request.

        Sincerely,

        {Your Name}
        {Your Position}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
        { "id": 'CompanyAddress', "label": 'Company Address', "type": 'text' },
        { "id": 'LeaveType', "label": 'Leave Type', "type": 'text' },
        { "id": 'LeaveDuration', "label": 'Leave Duration', "type": 'text' },
        { "id": 'StartDate', "label": 'Start Date', "type": 'date' },
        { "id": 'EndDate', "label": 'End Date', "type": 'date' },
        { "id": 'ReasonForLeave', "label": 'Reason for Leave', "type": 'textarea' },
        { "id": 'ColleagueName', "label": 'Colleague\'s Name', "type": 'text' },
        { "id": 'ColleagueContactInfo', "label": 'Colleague\'s Contact Information', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Information Request": {
       template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company: {Company Name}
        Address: {Company Address}

        Subject: Request for Information on {Subject}

        Dear {Recipient Name},

        I am writing to request information regarding {Subject}. Specifically, I am interested in the 
        following details:
        
        - **Details Needed:** {Specific Information Required}
        - **Purpose of Request:** {Purpose or Reason for Information}
        - **Deadline for Response:** {Requested Deadline}

        This information is crucial for {Brief Explanation of Why Information is Needed}. If possible, 
        please provide the requested details by {Requested Deadline}.

        Thank you in advance for your assistance.

        Sincerely,

        {Your Name}
        {Your Position}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
        { "id": 'CompanyAddress', "label": 'Company Address', "type": 'text' },
        { "id": 'Subject', "label": 'Subject', "type": 'text' },
        { "id": 'SpecificInformationRequired', "label": 'Specific Information Required', "type": 'textarea' },
        { "id": 'PurposeOfRequest', "label": 'Purpose of Request', "type": 'textarea' },
        { "id": 'RequestedDeadline', "label": 'Requested Deadline', "type": 'date' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Resource Request": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department}
        Company: {Company Name}
        Address: {Company Address}

        Subject: Request for Resources

        Dear {Recipient Name},

        I am writing to request the following resources for {Project/Department/Team}. 
        The details of the resources needed are as follows:

        **Requested Resources:**
        - **Resource 1:** {Description of Resource 1}
        - **Resource 2:** {Description of Resource 2}
        - **Resource 3:** {Description of Resource 3}
        
        **Purpose of Request:**
        {Detailed Explanation of Why Resources Are Needed}

        **Expected Delivery Date:**
        {Expected Delivery Date}

        Your timely assistance in fulfilling this request would be greatly appreciated. 
        Please let me know if you need any additional information.

        Thank you for your support.

        Sincerely,

        {Your Name}
        {Your Position}
        {Your Department}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'Department', "label": 'Department', "type": 'text' },
        { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
        { "id": 'CompanyAddress', "label": 'Company Address', "type": 'text' },
        { "id": 'Resource1', "label": 'Resource 1', "type": 'text' },
        { "id": 'Resource2', "label": 'Resource 2', "type": 'text' },
        { "id": 'Resource3', "label": 'Resource 3', "type": 'text' },
        { "id": 'PurposeOfRequest', "label": 'Purpose of Request', "type": 'textarea' },
        { "id": 'ExpectedDeliveryDate', "label": 'Expected Delivery Date', "type": 'date' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
        { "id": 'YourDepartment', "label": 'Your Department', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Approval Request": {
        template : `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company: {Company Name}
        Address: {Company Address}

        Subject: Request for Approval of {Subject/Project/Expense}

        Dear {Recipient Name},

        I am writing to request your approval for {Subject/Project/Expense}. 
        The details of the request are as follows:

        **Description:**
        {Detailed Description of the Subject/Project/Expense}

        **Justification:**
        {Reason for the Request and Benefits of Approval}

        **Budget/Cost Estimate:**
        {Estimated Budget or Cost, if applicable}

        **Approval Needed By:**
        {Deadline for Approval}

        Your approval is essential for moving forward with this request. Please review the 
        attached documentation and provide your approval at your earliest convenience.

        Thank you for your attention to this matter.

        Sincerely,

        {Your Name}
        {Your Position}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
        { "id": 'CompanyAddress', "label": 'Company Address', "type": 'text' },
        { "id": 'Subject', "label": 'Subject/Project/Expense', "type": 'text' },
        { "id": 'DetailedDescription', "label": 'Detailed Description', "type": 'textarea' },
        { "id": 'Justification', "label": 'Justification', "type": 'textarea' },
        { "id": 'EstimatedBudget', "label": 'Estimated Budget/Cost', "type": 'text' },
        { "id": 'ApprovalDeadline', "label": 'Approval Deadline', "type": 'date' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Change Request": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department}
        Company: {Company Name}
        Address: {Company Address}

        Subject: Request for Change in {Project/Process/Policy}

        Dear {Recipient Name},

        I am writing to request a change in {Project/Process/Policy}. The details of the 
        requested change are as follows:

        **Current Situation:**
        {Brief Description of the Current Situation}

        **Proposed Change:**
        {Description of the Proposed Change}

        **Reason for Change:**
        {Justification for the Change}

        **Expected Impact:**
        {Expected Impact of the Change}

        **Implementation Timeline:**
        {Proposed Timeline for Implementing the Change}

        Please review the proposed change and let me know if additional information is needed or if 
        there are any concerns.

        Thank you for considering this request.

        Sincerely,

        {Your Name}
        {Your Position}
        {Your Department}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'Department', "label": 'Department', "type": 'text' },
        { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
        { "id": 'CompanyAddress', "label": 'Company Address', "type": 'text' },
        { "id": 'CurrentSituation', "label": 'Current Situation', "type": 'textarea' },
        { "id": 'ProposedChange', "label": 'Proposed Change', "type": 'textarea' },
        { "id": 'ReasonForChange', "label": 'Reason for Change', "type": 'textarea' },
        { "id": 'ExpectedImpact', "label": 'Expected Impact', "type": 'textarea' },
        { "id": 'ImplementationTimeline', "label": 'Implementation Timeline', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
        { "id": 'YourDepartment', "label": 'Your Department', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Extension Request": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company: {Company Name}
        Address: {Company Address}

        Subject: Request for Extension of {Project/Deadline}

        Dear {Recipient Name},

        I am writing to request an extension for {Project/Deadline} due to {Reason for Extension}. 
        The original deadline is {Original Deadline} and I am requesting an extension 
        until {Requested Extension Date}.

        **Reason for Extension:**
        {Detailed Explanation for the Request}

        **Impact of Extension:**
        {How the Extension Will Affect the Project/Task}

        I assure you that I will make every effort to complete the project within the extended time frame. 
        Please let me know if this extension is possible or if you require any further information.

        Thank you for your consideration.

        Sincerely,

        {Your Name}
        {Your Position}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyName', "label": 'Company Name', "type": 'text' },
        { "id": 'CompanyAddress', "label": 'Company Address', "type": 'text' },
        { "id": 'OriginalDeadline', "label": 'Original Deadline', "type": 'date' },
        { "id": 'RequestedExtensionDate', "label": 'Requested Extension Date', "type": 'date' },
        { "id": 'ReasonForExtension', "label": 'Reason for Extension', "type": 'textarea' },
        { "id": 'ImpactOfExtension', "label": 'Impact of Extension', "type": 'textarea' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Recommendation Request": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company/Institution: {Company/Institution Name}
        Address: {Company/Institution Address}

        Subject: Request for Letter of Recommendation

        Dear {Recipient Name},

        I am writing to request a letter of recommendation from you for {Purpose of
         Recommendation, e.g., job application, academic program}. 

        **Details Required:**
        - **Purpose of Recommendation:** {Purpose}
        - **Recipient of Recommendation:** {Recipient Name}
        - **Submission Deadline:** {Submission Deadline}
        - **Key Points to Include:** {Key Points or Achievements}

        I greatly value your opinion and believe that your recommendation would be a significant 
        asset to my application. Please let me know if you need any additional information or if 
        you would prefer to discuss this in person.

        Thank you very much for considering my request.

        Sincerely,

        {Your Name}
        {Your Position/Relationship to Recipient}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyInstitutionName', "label": 'Company/Institution Name', "type": 'text' },
        { "id": 'CompanyInstitutionAddress', "label": 'Company/Institution Address', "type": 'text' },
        { "id": 'Purpose', "label": 'Purpose of Recommendation', "type": 'text' },
        { "id": 'RecipientOfRecommendation', "label": 'Recipient of Recommendation', "type": 'text' },
        { "id": 'SubmissionDeadline', "label": 'Submission Deadline', "type": 'date' },
        { "id": 'KeyPointsToInclude', "label": 'Key Points to Include', "type": 'textarea' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPositionRelationship', "label": 'Your Position/Relationship to Recipient', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },
    },

    "WitnessStatements": {
    "Incident Report": {
       template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company/Institution: {Company/Institution Name}
        Address: {Company/Institution Address}

        Subject: Witness Statement - Incident Report

        Dear {Recipient Name},

        I am writing to provide my statement regarding 
        the incident that occurred on {Incident Date}. 
        Below are the details of the incident as observed by me:

        **Incident Description:**
        {Detailed Description of the Incident}

        **Location of Incident:**
        {Location}

        **Time of Incident:**
        {Time}

        **Witnesses Present:**
        {Names of Other Witnesses}

        **Actions Taken:**
        {Actions Taken Immediately After the Incident}

        **Additional Comments:**
        {Any Additional Observations or Information}

        I declare that the above information is accurate to the best of 
        my knowledge.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
         fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyInstitutionName', "label": 'Company/Institution Name', "type": 'text' },
        { "id": 'CompanyInstitutionAddress', "label": 'Company/Institution Address', "type": 'text' },
        { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
        { "id": 'IncidentDescription', "label": 'Detailed Description of the Incident', "type": 'textarea' },
        { "id": 'Location', "label": 'Location', "type": 'text' },
        { "id": 'Time', "label": 'Time', "type": 'text' },
        { "id": 'WitnessesPresent', "label": 'Witnesses Present', "type": 'textarea' },
        { "id": 'ActionsTaken', "label": 'Actions Taken', "type": 'textarea' },
        { "id": 'AdditionalComments', "label": 'Additional Comments', "type": 'textarea' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Character Reference": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company/Institution: {Company/Institution Name}
        Address: {Company/Institution Address}

        Subject: Character Reference Statement

        Dear {Recipient Name},

        I am pleased to provide this character reference for {Person's Name}, who I have known 
        for {Duration of Acquaintance}. 
        The following is my assessment based on my observations:

        **Personal Attributes:**
        {Description of Personal Attributes}

        **Professional Behavior:**
        {Description of Professional Behavior}

        **Specific Examples:**
        {Specific Examples Demonstrating Character}

        **Overall Impression:**
        {Overall Impression of the Individual}

        I believe {Person's Name} will be an asset to {Organization/Institution} and highly recommend them.

        Sincerely,

        {Your Name}
        {Your Position}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyInstitutionName', "label": 'Company/Institution Name', "type": 'text' },
        { "id": 'CompanyInstitutionAddress', "label": 'Company/Institution Address', "type": 'text' },
        { "id": 'PersonsName', "label": 'Person\'s Name', "type": 'text' },
        { "id": 'DurationOfAcquaintance', "label": 'Duration of Acquaintance', "type": 'text' },
        { "id": 'PersonalAttributes', "label": 'Personal Attributes', "type": 'textarea' },
        { "id": 'ProfessionalBehavior', "label": 'Professional Behavior', "type": 'textarea' },
        { "id": 'SpecificExamples', "label": 'Specific Examples', "type": 'textarea' },
        { "id": 'OverallImpression', "label": 'Overall Impression', "type": 'textarea' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Affidavit": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company/Institution: {Company/Institution Name}
        Address: {Company/Institution Address}

        Subject: Affidavit of {Affiant's Name}

        Dear {Recipient Name},

        I, {Affiant's Name}, hereby declare under oath the following facts, based on my personal knowledge:

        **Affidavit Statement:**
        {Detailed Statement}

        **Supporting Evidence:**
        {Details of Any Supporting Evidence}

        **Declaration:**
        I affirm that the information provided is accurate and true to the best of my knowledge.

        Sincerely,

        {Affiant's Name}
        {Affiant's Signature}
        {Date}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyInstitutionName', "label": 'Company/Institution Name', "type": 'text' },
        { "id": 'CompanyInstitutionAddress', "label": 'Company/Institution Address', "type": 'text' },
        { "id": 'AffiantsName', "label": 'Affiant\'s Name', "type": 'text' },
        { "id": 'DetailedStatement', "label": 'Detailed Statement', "type": 'textarea' },
        { "id": 'SupportingEvidence', "label": 'Supporting Evidence', "type": 'textarea' },
        { "id": 'AffiantsSignature', "label": 'Affiant\'s Signature', "type": 'text' }
      ]
    },

    "Testimonial": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company/Institution: {Company/Institution Name}
        Address: {Company/Institution Address}

        Subject: Testimonial for {Person's Name}

        Dear {Recipient Name},

        I am writing to provide a testimonial for {Person's Name} based on my personal experience                                                                
        and observations:

        **Relationship to Individual:**
        {Description of Relationship}

        **Skills and Qualities:**
        {Description of Skills and Qualities}

        **Notable Achievements:**
        {Details of Notable Achievements}

        **Recommendation:**
        I strongly recommend {Person's Name} for {Purpose of Testimonial}.

        Sincerely,

        {Your Name}
        {Your Position}
        {Your Contact Information}
      `,
      fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyInstitutionName', "label": 'Company/Institution Name', "type": 'text' },
        { "id": 'CompanyInstitutionAddress', "label": 'Company/Institution Address', "type": 'text' },
        { "id": 'PersonsName', "label": 'Person\'s Name', "type": 'text' },
        { "id": 'DescriptionOfRelationship', "label": 'Description of Relationship', "type": 'textarea' },
        { "id": 'SkillsAndQualities', "label": 'Skills and Qualities', "type": 'textarea' },
        { "id": 'NotableAchievements', "label": 'Notable Achievements', "type": 'textarea' },
        { "id": 'PurposeOfTestimonial', "label": 'Purpose of Testimonial', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourPosition', "label": 'Your Position', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Sworn Statement": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company/Institution: {Company/Institution Name}
        Address: {Company/Institution Address}

        Subject: Sworn Statement of {Affiant's Name}

        Dear {Recipient Name},

        I, {Affiant's Name}, do hereby declare under oath and penalty of perjury that the following 
        statements are true and accurate:

        **Statement:**
        {Detailed Statement}

        **Evidence Provided:**
        {Details of Evidence Provided}

        **Affirmation:**
        I affirm that the statements made in this document are accurate and truthful to the best of 
        my knowledge.

        Sincerely,

        {Affiant's Name}
        {Affiant's Signature}
        {Date}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyInstitutionName', "label": 'Company/Institution Name', "type": 'text' },
        { "id": 'CompanyInstitutionAddress', "label": 'Company/Institution Address', "type": 'text' },
        { "id": 'AffiantsName', "label": 'Affiant\'s Name', "type": 'text' },
        { "id": 'DetailedStatement', "label": 'Detailed Statement', "type": 'textarea' },
        { "id": 'EvidenceProvided', "label": 'Evidence Provided', "type": 'textarea' },
        { "id": 'AffiantsSignature', "label": 'Affiant\'s Signature', "type": 'text' }
      ]
    },

    "Witness Testimony": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company/Institution: {Company/Institution Name}
        Address: {Company/Institution Address}

        Subject: Witness Testimony - {Case Name/Number}

        Dear {Recipient Name},

        I am providing this testimony as a witness for the case of {Case Name/Number}. 
        The following is my account of the events as observed:

        **Witness Statement:**
        {Detailed Account of Events}

        **Relevance to Case:**
        {Explanation of Relevance}

        **Additional Information:**
        {Any Additional Information}

        I affirm that the above statements are true and accurate to the best of my knowledge.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyInstitutionName', "label": 'Company/Institution Name', "type": 'text' },
        { "id": 'CompanyInstitutionAddress', "label": 'Company/Institution Address', "type": 'text' },
        { "id": 'CaseNameNumber', "label": 'Case Name/Number', "type": 'text' },
        { "id": 'DetailedAccountOfEvents', "label": 'Detailed Account of Events', "type": 'textarea' },
        { "id": 'ExplanationOfRelevance', "label": 'Explanation of Relevance', "type": 'textarea' },
        { "id": 'AdditionalInformation', "label": 'Additional Information', "type": 'textarea' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Witness Affidavit": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Company/Institution: {Company/Institution Name}
        Address: {Company/Institution Address}

        Subject: Witness Affidavit - {Affidavit Subject}

        Dear {Recipient Name},

        I, {Affiant's Name}, make this affidavit to provide a sworn statement about the 
        following matter:I, {Affiant's Name}, make this affidavit to provide a sworn statement 
        about the following matter:

        **Affidavit Subject:**
        {Subject of the Affidavit}

        **Statement:**
        {Detailed Statement}

        **Supporting Documents:**
        {List of Supporting Documents}

        **Affirmation:**
        I declare under oath that the above statement is true and correct to the best of my knowledge.

        Sincerely,

        {Affiant's Name}
        {Affiant's Signature}
        {Date}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'CompanyInstitutionName', "label": 'Company/Institution Name', "type": 'text' },
        { "id": 'CompanyInstitutionAddress', "label": 'Company/Institution Address', "type": 'text' },
        { "id": 'AffidavitSubject', "label": 'Affidavit Subject', "type": 'text' },
        { "id": 'DetailedStatement', "label": 'Detailed Statement', "type": 'textarea' },
        { "id": 'SupportingDocuments', "label": 'List of Supporting Documents', "type": 'textarea' },
        { "id": 'AffiantsName', "label": 'Affiant\'s Name', "type": 'text' },
        { "id": 'AffiantsSignature', "label": 'Affiant\'s Signature', "type": 'text' }
      ]
    }
  },

      "Traffic Violation":{

        "Speeding Violation": {
          template: `
            Date: {Date}
    
            To: {Recipient Name}
            Position: {Recipient Position}
            Department: {Department Name}
            Address: {Department Address}
    
            Subject: Witness Statement - Speeding Violation
    
            Dear {Recipient Name},
    
            I am writing to provide my witness statement regarding the speeding violation that occurred 
            on {Incident Date} at {Location}. The following are the details of the incident:
    
            **Incident Description:**
            {Detailed Description of the Speeding Violation}
    
            **Vehicle Details:**
            - Make and Model: {Vehicle Make and Model}
            - License Plate Number: {License Plate Number}
            - Color: {Vehicle Color}
    
            **Driver Description:**
            {Description of the Driver}
    
            **Speed Observed:**
            {Estimated Speed}
    
            **Weather and Road Conditions:**
            {Description of Weather and Road Conditions}
    
            **Additional Observations:**
            {Any Additional Observations}
    
            I declare that the above information is accurate to the best of my knowledge.
    
            Sincerely,
    
            {Your Name}
            {Your Contact Information}
          `,
            fields: [
            { "id": 'Date', "label": 'Date', "type": 'date' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
            { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
            { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
            { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
            { "id": 'Location', "label": 'Location', "type": 'text' },
            { "id": 'DetailedDescription', "label": 'Detailed Description of the Speeding Violation', "type": 'textarea' },
            { "id": 'VehicleMakeModel', "label": 'Vehicle Make and Model', "type": 'text' },
            { "id": 'LicensePlateNumber', "label": 'License Plate Number', "type": 'text' },
            { "id": 'VehicleColor', "label": 'Vehicle Color', "type": 'text' },
            { "id": 'DriverDescription', "label": 'Description of the Driver', "type": 'textarea' },
            { "id": 'EstimatedSpeed', "label": 'Estimated Speed', "type": 'text' },
            { "id": 'WeatherRoadConditions', "label": 'Weather and Road Conditions', "type": 'textarea' },
            { "id": 'AdditionalObservations', "label": 'Any Additional Observations', "type": 'textarea' },
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
          ]
        },
    
        "DUI Violation": {
            template: `
            Date: {Date}
    
            To: {Recipient Name}
            Position: {Recipient Position}
            Department: {Department Name}
            Address: {Department Address}
    
            Subject: Witness Statement - DUI Violation
    
            Dear {Recipient Name},
    
            I am writing to provide my witness statement regarding the DUI (Driving Under the Influence) violation 
            that occurred on {Incident Date} at {Location}. The following are the details of the incident:
    
            **Incident Description:**
            {Detailed Description of the DUI Violation}
    
            **Vehicle Details:**
            - Make and Model: {Vehicle Make and Model}
            - License Plate Number: {License Plate Number}
            - Color: {Vehicle Color}
    
            **Driver Behavior:**
            {Description of the Driver's Behavior}
    
            **Sobriety Tests:**
            {Description of Any Sobriety Tests Conducted}
    
            **Additional Observations:**
            {Any Additional Observations}
    
            I declare that the above information is accurate to the best of my knowledge.
    
            Sincerely,
    
            {Your Name}
            {Your Contact Information}
          `,
            fields: [
            { "id": 'Date', "label": 'Date', "type": 'date' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
            { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
            { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
            { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
            { "id": 'Location', "label": 'Location', "type": 'text' },
            { "id": 'DetailedDescription', "label": 'Detailed Description of the DUI Violation', "type": 'textarea' },
            { "id": 'VehicleMakeModel', "label": 'Vehicle Make and Model', "type": 'text' },
            { "id": 'LicensePlateNumber', "label": 'License Plate Number', "type": 'text' },
            { "id": 'VehicleColor', "label": 'Vehicle Color', "type": 'text' },
            { "id": 'DriverBehavior', "label": 'Description of the Driver\'s Behavior', "type": 'textarea' },
            { "id": 'SobrietyTests', "label": 'Description of Any Sobriety Tests Conducted', "type": 'textarea' },
            { "id": 'AdditionalObservations', "label": 'Any Additional Observations', "type": 'textarea' },
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
          ]
        },
    
        "Hit and Run": {
            template: `
            Date: {Date}
    
            To: {Recipient Name}
            Position: {Recipient Position}
            Department: {Department Name}
            Address: {Department Address}
    
            Subject: Witness Statement - Hit and Run
    
            Dear {Recipient Name},
    
            I am writing to provide my witness statement regarding the hit-and-run incident that occurred 
            on {Incident Date} at {Location}. The following are the details of the incident:
    
            **Incident Description:**
            {Detailed Description of the Hit and Run Incident}
    
            **Vehicle Details:**
            - Make and Model: {Vehicle Make and Model}
            - License Plate Number: {License Plate Number}
            - Color: {Vehicle Color}
    
            **Driver Description:**
            {Description of the Driver}
    
            **Direction of Fleeing:**
            {Direction in Which the Vehicle Fled}
    
            **Additional Observations:**
            {Any Additional Observations}
    
            I declare that the above information is accurate to the best of my knowledge.
    
            Sincerely,
    
            {Your Name}
            {Your Contact Information}
          `,
            fields: [
            { "id": 'Date', "label": 'Date', "type": 'date' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
            { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
            { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
            { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
            { "id": 'Location', "label": 'Location', "type": 'text' },
            { "id": 'DetailedDescription', "label": 'Detailed Description of the Hit and Run Incident', "type": 'textarea' },
            { "id": 'VehicleMakeModel', "label": 'Vehicle Make and Model', "type": 'text' },
            { "id": 'LicensePlateNumber', "label": 'License Plate Number', "type": 'text' },
            { "id": 'VehicleColor', "label": 'Vehicle Color', "type": 'text' },
            { "id": 'DriverDescription', "label": 'Description of the Driver', "type": 'textarea' },
            { "id": 'DirectionOfFleeing', "label": 'Direction in Which the Vehicle Fled', "type": 'textarea' },
            { "id": 'AdditionalObservations', "label": 'Any Additional Observations', "type": 'textarea' },
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
          ]
        },
    
        "Reckless Driving": {
            template: `
            Date: {Date}
    
            To: {Recipient Name}
            Position: {Recipient Position}
            Department: {Department Name}
            Address: {Department Address}
    
            Subject: Witness Statement - Reckless Driving
    
            Dear {Recipient Name},
    
            I am writing to provide my witness statement regarding the reckless driving incident that 
            occurred on {Incident Date} at {Location}. The following are the details of the incident:
    
            **Incident Description:**
            {Detailed Description of the Reckless Driving Incident}
    
            **Vehicle Details:**
            - Make and Model: {Vehicle Make and Model}
            - License Plate Number: {License Plate Number}
            - Color: {Vehicle Color}
    
            **Driver Description:**
            {Description of the Driver}
    
            **Dangerous Actions Observed:**
            {List of Dangerous Actions Observed}
    
            **Additional Observations:**
            {Any Additional Observations}
    
            I declare that the above information is accurate to the best of my knowledge.
    
            Sincerely,
    
            {Your Name}
            {Your Contact Information}
          `,
            fields: [
            { "id": 'Date', "label": 'Date', "type": 'date' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
            { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
            { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
            { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
            { "id": 'Location', "label": 'Location', "type": 'text' },
            { "id": 'DetailedDescription', "label": 'Detailed Description of the Reckless Driving Incident', "type": 'textarea' },
            { "id": 'VehicleMakeModel', "label": 'Vehicle Make and Model', "type": 'text' },
            { "id": 'LicensePlateNumber', "label": 'License Plate Number', "type": 'text' },
            { "id": 'VehicleColor', "label": 'Vehicle Color', "type": 'text' },
            { "id": 'DriverDescription', "label": 'Description of the Driver', "type": 'textarea' },
            { "id": 'DangerousActionsObserved', "label": 'List of Dangerous Actions Observed', "type": 'textarea' },
            { "id": 'AdditionalObservations', "label": 'Any Additional Observations', "type": 'textarea' },
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
          ]
        },
    
        "Traffic Light Violation": {
            template: `
            Date: {Date}
    
            To: {Recipient Name}
            Position: {Recipient Position}
            Department: {Department Name}
            Address: {Department Address}
    
            Subject: Witness Statement - Traffic Light Violation
    
            Dear {Recipient Name},
    
            I am writing to provide my witness statement regarding the traffic light violation that 
            occurred on {Incident Date} at {Location}. The following are the details of the incident:
    
            **Incident Description:**
            {Detailed Description of the Traffic Light Violation}
    
            **Vehicle Details:**
            - Make and Model: {Vehicle Make and Model}
            - License Plate Number: {License Plate Number}
            - Color: {Vehicle Color}
    
            **Driver Description:**
            {Description of the Driver}
    
            **Signal Timing:**
            {Description of the Signal Timing and Lights}
    
            **Additional Observations:**
            {Any Additional Observations}
    
            I declare that the above information is accurate to the best of my knowledge.
    
            Sincerely,
    
            {Your Name}
            {Your Contact Information}
          `,
            fields: [
            { "id": 'Date', "label": 'Date', "type": 'date' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
            { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
            { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
            { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
            { "id": 'Location', "label": 'Location', "type": 'text' },
            { "id": 'DetailedDescription', "label": 'Detailed Description of the Traffic Light Violation', "type": 'textarea' },
            { "id": 'VehicleMakeModel', "label": 'Vehicle Make and Model', "type": 'text' },
            { "id": 'LicensePlateNumber', "label": 'License Plate Number', "type": 'text' },
            { "id": 'VehicleColor', "label": 'Vehicle Color', "type": 'text' },
            { "id": 'DriverDescription', "label": 'Description of the Driver', "type": 'textarea' },
            { "id": 'SignalTiming', "label": 'Description of the Signal Timing and Lights', "type": 'textarea' },
            { "id": 'AdditionalObservations', "label": 'Any Additional Observations', "type": 'textarea' },
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
          ]
        },
    
        "Illegal U-Turn": {
            template: `
            Date: {Date}
    
            To: {Recipient Name}
            Position: {Recipient Position}
            Department: {Department Name}
            Address: {Department Address}
    
            Subject: Witness Statement - Illegal U-Turn
    
            Dear {Recipient Name},
    
            I am writing to provide my witness statement regarding the illegal U-turn incident that occurred 
            on {Incident Date} at {Location}. The following are the details of the incident:
    
            **Incident Description:**
            {Detailed Description of the Illegal U-Turn Incident}
    
            **Vehicle Details:**
            - Make and Model: {Vehicle Make and Model}
            - License Plate Number: {License Plate Number}
            - Color: {Vehicle Color}
    
            **Driver Description:**
            {Description of the Driver}
    
            **Traffic Conditions:**
            {Description of Traffic Conditions}
    
            **Additional Observations:**
            {Any Additional Observations}
    
            I declare that the above information is accurate to the best of my knowledge.
    
            Sincerely,
    
            {Your Name}
            {Your Contact Information}
          `,
            fields: [
            { "id": 'Date', "label": 'Date', "type": 'date' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
            { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
            { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
            { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
            { "id": 'Location', "label": 'Location', "type": 'text' },
            { "id": 'DetailedDescription', "label": 'Detailed Description of the Illegal U-Turn Incident', "type": 'textarea' },
            { "id": 'VehicleMakeModel', "label": 'Vehicle Make and Model', "type": 'text' },
            { "id": 'LicensePlateNumber', "label": 'License Plate Number', "type": 'text' },
            { "id": 'VehicleColor', "label": 'Vehicle Color', "type": 'text' },
            { "id": 'DriverDescription', "label": 'Description of the Driver', "type": 'textarea' },
            { "id": 'TrafficConditions', "label": 'Description of Traffic Conditions', "type": 'textarea' },
            { "id": 'AdditionalObservations', "label": 'Any Additional Observations', "type": 'textarea' },
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
          ]
        },
    
        "Failure to Yield": {
            template: `
            Date: {Date}
    
            To: {Recipient Name}
            Position: {Recipient Position}
            Department: {Department Name}
            Address: {Department Address}
    
            Subject: Witness Statement - Failure to Yield
    
            Dear {Recipient Name},
    
            I am writing to provide my witness statement regarding the failure to yield incident that occurred 
            on {Incident Date} at {Location}. The following are the details of the incident:
    
            **Incident Description:**
            {Detailed Description of the Failure to Yield Incident}
    
            **Vehicle Details:**
            - Make and Model: {Vehicle Make and Model}
            - License Plate Number: {License Plate Number}
            - Color: {Vehicle Color}
    
            **Driver Description:**
            {Description of the Driver}
    
            **Traffic Conditions:**
            {Description of Traffic Conditions}
    
            **Impact or Near Miss:**
            {Description of Impact or Near Miss}
    
            **Additional Observations:**
            {Any Additional Observations}
    
            I declare that the above information is accurate to the best of my knowledge.
    
            Sincerely,
    
            {Your Name}
            {Your Contact Information}
          `,
            fields: [
            { "id": 'Date', "label": 'Date', "type": 'date' },
            { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
            { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
            { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
            { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
            { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
            { "id": 'Location', "label": 'Location', "type": 'text' },
            { "id": 'DetailedDescription', "label": 'Detailed Description of the Failure to Yield Incident', "type": 'textarea' },
            { "id": 'VehicleMakeModel', "label": 'Vehicle Make and Model', "type": 'text' },
            { "id": 'LicensePlateNumber', "label": 'License Plate Number', "type": 'text' },
            { "id": 'VehicleColor', "label": 'Vehicle Color', "type": 'text' },
            { "id": 'DriverDescription', "label": 'Description of the Driver', "type": 'textarea' },
            { "id": 'TrafficConditions', "label": 'Description of Traffic Conditions', "type": 'textarea' },
            { "id": 'ImpactOrNearMiss', "label": 'Description of Impact or Near Miss', "type": 'textarea' },
            { "id": 'AdditionalObservations', "label": 'Any Additional Observations', "type": 'textarea' },
            { "id": 'YourName', "label": 'Your Name', "type": 'text' },
            { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
          ]
        },
      },

      "Victim Assistance": {
    "Emergency Assistance Request": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department Name}
        Address: {Department Address}

        Subject: Request for Emergency Assistance

        Dear {Recipient Name},

        I am writing to urgently request assistance due to an emergency situation. The details of the emergency are 
        as follows:

        **Incident Description:**
        {Detailed Description of the Emergency}

        **Location of Incident:**
        {Location of the Incident}

        **Type of Assistance Needed:**
        {Specify the Type of Assistance Required}

        **Contact Information:**
        {Your Contact Information}

        Please respond at your earliest convenience as this situation requires immediate attention.

        Thank you for your prompt assistance.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
        { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
        { "id": 'IncidentDescription', "label": 'Detailed Description of the Emergency', "type": 'textarea' },
        { "id": 'LocationOfIncident', "label": 'Location of the Incident', "type": 'text' },
        { "id": 'TypeOfAssistance', "label": 'Type of Assistance Required', "type": 'text' },
        { "id": 'ContactInformation', "label": 'Your Contact Information', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Victim Impact Statement": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department Name}
        Address: {Department Address}

        Subject: Victim Impact Statement

        Dear {Recipient Name},

        I am writing to provide a statement regarding the impact of the recent incident on my life. The details are
         as follows:

        **Incident Description:**
        {Description of the Incident}

        **Impact on Daily Life:**
        {Description of How the Incident Has Affected Your Daily Life}

        **Emotional and Psychological Effects:**
        {Details of Emotional and Psychological Impact}

        **Financial Impact:**
        {Details of Financial Impact, if any}

        **Additional Comments:**
        {Any Additional Comments}

        I appreciate your attention to this matter and hope for appropriate support and assistance.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
        { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
        { "id": 'IncidentDescription', "label": 'Description of the Incident', "type": 'textarea' },
        { "id": 'ImpactOnDailyLife', "label": 'Description of How the Incident Has Affected Your Daily Life', "type": 'textarea' },
        { "id": 'EmotionalPsychologicalEffects', "label": 'Details of Emotional and Psychological Impact', "type": 'textarea' },
        { "id": 'FinancialImpact', "label": 'Details of Financial Impact, if any', "type": 'textarea' },
        { "id": 'AdditionalComments', "label": 'Any Additional Comments', "type": 'textarea' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Counseling Request": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department Name}
        Address: {Department Address}

        Subject: Request for Counseling Services

        Dear {Recipient Name},

        I am writing to request counseling services following the recent incident. The details of my request are 
        as follows:

        **Incident Description:**
        {Description of the Incident}

        **Reason for Counseling:**
        {Reason for Seeking Counseling}

        **Preferred Counseling Services:**
        {Details of Preferred Counseling Services}

        **Availability:**
        {Your Availability for Appointments}

        I would appreciate it if you could provide information on available counseling options and assist in scheduling
         an appointment.

        Thank you for your attention to this matter.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
        { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
        { "id": 'IncidentDescription', "label": 'Description of the Incident', "type": 'textarea' },
        { "id": 'ReasonForCounseling', "label": 'Reason for Seeking Counseling', "type": 'textarea' },
        { "id": 'PreferredCounselingServices', "label": 'Details of Preferred Counseling Services', "type": 'textarea' },
        { "id": 'Availability', "label": 'Your Availability for Appointments', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Legal Assistance Request": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department Name}
        Address: {Department Address}

        Subject: Request for Legal Assistance

        Dear {Recipient Name},

        I am seeking legal assistance related to the recent incident. The details of my request are as follows:

        **Incident Description:**
        {Description of the Incident}

        **Nature of Legal Assistance Needed:**
        {Description of the Legal Assistance Required}

        **Specific Legal Concerns:**
        {Details of Any Specific Legal Concerns}

        **Contact Information:**
        {Your Contact Information}

        I would appreciate your prompt response and assistance with my legal concerns.

        Thank you for your support.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
        { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
        { "id": 'IncidentDescription', "label": 'Description of the Incident', "type": 'textarea' },
        { "id": 'NatureOfLegalAssistance', "label": 'Description of the Legal Assistance Required', "type": 'textarea' },
        { "id": 'SpecificLegalConcerns', "label": 'Details of Any Specific Legal Concerns', "type": 'textarea' },
        { "id": 'ContactInformation', "label": 'Your Contact Information', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Victim Compensation Claim": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department Name}
        Address: {Department Address}

        Subject: Victim Compensation Claim

        Dear {Recipient Name},

        I am submitting a claim for victim compensation related to the incident that occurred on {Incident Date}. 
        The details of my claim are as follows:

        **Incident Description:**
        {Description of the Incident}

        **Type of Compensation Requested:**
        {Description of the Compensation Requested}

        **Supporting Documentation:**
        {List of Supporting Documents Attached}

        **Total Amount Claimed:**
        {Total Amount Claimed}

        **Contact Information:**
        {Your Contact Information}

        I request your prompt attention to this claim and look forward to your response.

        Thank you for your assistance.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
        { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
        { "id": 'IncidentDate', "label": 'Incident Date', "type": 'date' },
        { "id": 'IncidentDescription', "label": 'Description of the Incident', "type": 'textarea' },
        { "id": 'TypeOfCompensation', "label": 'Description of the Compensation Requested', "type": 'textarea' },
        { "id": 'SupportingDocumentation', "label": 'List of Supporting Documents Attached', "type": 'textarea' },
        { "id": 'TotalAmountClaimed', "label": 'Total Amount Claimed', "type": 'text' },
        { "id": 'ContactInformation', "label": 'Your Contact Information', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Support Group Referral": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department Name}
        Address: {Department Address}

        Subject: Referral to Support Group

        Dear {Recipient Name},

        I am requesting a referral to a support group following the recent incident. The details of my request                                                                                                                                                                          
         are as follows:

        **Incident Description:**
        {Description of the Incident}

        **Type of Support Group Needed:**
        {Description of the Type of Support Group Needed}

        **Reason for Referral:**
        {Reason for Requesting the Referral}

        **Contact Information:**
        {Your Contact Information}

        I would appreciate your assistance in connecting me with a suitable support group.

        Thank you for your help.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
        { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
        { "id": 'IncidentDescription', "label": 'Description of the Incident', "type": 'textarea' },
        { "id": 'TypeOfSupportGroupNeeded', "label": 'Description of the Type of Support Group Needed', "type": 'textarea' },
        { "id": 'ReasonForReferral', "label": 'Reason for Requesting the Referral', "type": 'textarea' },
        { "id": 'ContactInformation', "label": 'Your Contact Information', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }
      ]
    },

    "Medical Assistance Request": {
        template: `
        Date: {Date}

        To: {Recipient Name}
        Position: {Recipient Position}
        Department: {Department Name}
        Address: {Department Address}

        Subject: Request for Medical Assistance

        Dear {Recipient Name},

        I am writing to request medical assistance following the recent incident. The details of my request are as follows:

        **Incident Description:**
        {Description of the Incident}

        **Nature of Medical Assistance Needed:**
        {Description of the Medical Assistance Required}

        **Medical History:**
        {Brief Medical History Relevant to the Incident}

        **Contact Information:**
        {Your Contact Information}

        I would appreciate your assistance in providing the necessary medical support.

        Thank you for your attention to this matter.

        Sincerely,

        {Your Name}
        {Your Contact Information}
      `,
        fields: [
        { "id": 'Date', "label": 'Date', "type": 'date' },
        { "id": 'RecipientName', "label": 'Recipient Name', "type": 'text' },
        { "id": 'RecipientPosition', "label": 'Recipient Position', "type": 'text' },
        { "id": 'DepartmentName', "label": 'Department Name', "type": 'text' },
        { "id": 'DepartmentAddress', "label": 'Department Address', "type": 'text' },
        { "id": 'IncidentDescription', "label": 'Description of the Incident', "type": 'textarea' },
        { "id": 'NatureOfMedicalAssistance', "label": 'Description of the Medical Assistance Required', "type": 'textarea' },
        { "id": 'MedicalHistory', "label": 'Brief Medical History Relevant to the Incident', "type": 'textarea' },
        { "id": 'ContactInformation', "label": 'Your Contact Information', "type": 'text' },
        { "id": 'YourName', "label": 'Your Name', "type": 'text' },
        { "id": 'YourContactInformation', "label": 'Your Contact Information', "type": 'text' }                                                                                                                                                                                   
      ]
    },
      },

      "Crime Reporting":{
        "Incident Report": {
          "template": `
            Date: {Date}
            Time: {Time}
            Location: {Location}
      
            Incident Report
      
            Description of Incident:
            {Description}
      
            Involved Parties:
            - Victim: {VictimName}
            - Suspect: {SuspectName}
            - Witnesses: {WitnessNames}
      
            Evidence Collected:
            {EvidenceDetails}
      
            Reporting Officer:
            {OfficerName}
            {OfficerBadgeNumber}
      
            Additional Notes:
            {AdditionalNotes}
      
            Report Filed By:
            {YourName}
            {YourContactInformation}
          `,
          "fields": [
            { "id": "Date", "label": "Date", "type": "date" },
            { "id": "Time", "label": "Time", "type": "time" },
            { "id": "Location", "label": "Location", "type": "text" },
            { "id": "Description", "label": "Description of Incident", "type": "textarea" },
            { "id": "VictimName", "label": "Victim Name", "type": "text" },
            { "id": "SuspectName", "label": "Suspect Name", "type": "text" },
            { "id": "WitnessNames", "label": "Witness Names", "type": "text" },
            { "id": "EvidenceDetails", "label": "Evidence Collected", "type": "textarea" },
            { "id": "OfficerName", "label": "Reporting Officer Name", "type": "text" },
            { "id": "OfficerBadgeNumber", "label": "Officer Badge Number", "type": "text" },
            { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
            { "id": "YourName", "label": "Your Name", "type": "text" },
            { "id": "YourContactInformation", "label": "Your Contact Information", "type": "text" }
          ]
        },
      
        "Theft Report": {
          "template": `
            Date of Theft: {Date}
            Time of Theft: {Time}
            Location: {Location}
      
            Theft Report
      
            Description of Theft:
            {Description}
      
            Items Stolen:
            {ItemsStolen}
      
            Estimated Value of Items:
            {EstimatedValue}
      
            Witnesses:
            {WitnessNames}
      
            Evidence Collected:
            {EvidenceDetails}
      
            Reporting Officer:
            {OfficerName}
            {OfficerBadgeNumber}
      
            Additional Notes:
            {AdditionalNotes}
      
            Report Filed By:
            {YourName}
            {YourContactInformation}
          `,
          "fields": [
            { "id": "Date", "label": "Date of Theft", "type": "date" },
            { "id": "Time", "label": "Time of Theft", "type": "time" },
            { "id": "Location", "label": "Location", "type": "text" },
            { "id": "Description", "label": "Description of Theft", "type": "textarea" },
            { "id": "ItemsStolen", "label": "Items Stolen", "type": "textarea" },
            { "id": "EstimatedValue", "label": "Estimated Value of Items", "type": "text" },
            { "id": "WitnessNames", "label": "Witness Names", "type": "text" },
            { "id": "EvidenceDetails", "label": "Evidence Collected", "type": "textarea" },
            { "id": "OfficerName", "label": "Reporting Officer Name", "type": "text" },
            { "id": "OfficerBadgeNumber", "label": "Officer Badge Number", "type": "text" },
            { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
            { "id": "YourName", "label": "Your Name", "type": "text" },
            { "id": "YourContactInformation", "label": "Your Contact Information", "type": "text" }
          ]
        },
      
        "Burglary Report": {
          "template": `
            Date of Burglary: {Date}
            Time of Burglary: {Time}
            Location: {Location}
      
            Burglary Report
      
            Description of Burglary:
            {Description}
      
            Entry Point:
            {EntryPoint}
      
            Items Stolen:
            {ItemsStolen}
      
            Damage Noted:
            {DamageDetails}
      
            Witnesses:
            {WitnessNames}
      
            Evidence Collected:
            {EvidenceDetails}
      
            Reporting Officer:
            {OfficerName}
            {OfficerBadgeNumber}
      
            Additional Notes:
            {AdditionalNotes}
      
            Report Filed By:
            {YourName}
            {YourContactInformation}
          `,
          "fields": [
            { "id": "Date", "label": "Date of Burglary", "type": "date" },
            { "id": "Time", "label": "Time of Burglary", "type": "time" },
            { "id": "Location", "label": "Location", "type": "text" },
            { "id": "Description", "label": "Description of Burglary", "type": "textarea" },
            { "id": "EntryPoint", "label": "Entry Point", "type": "text" },
            { "id": "ItemsStolen", "label": "Items Stolen", "type": "textarea" },
            { "id": "DamageDetails", "label": "Damage Noted", "type": "textarea" },
            { "id": "WitnessNames", "label": "Witness Names", "type": "text" },
            { "id": "EvidenceDetails", "label": "Evidence Collected", "type": "textarea" },
            { "id": "OfficerName", "label": "Reporting Officer Name", "type": "text" },
            { "id": "OfficerBadgeNumber", "label": "Officer Badge Number", "type": "text" },
            { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
            { "id": "YourName", "label": "Your Name", "type": "text" },
            { "id": "YourContactInformation", "label": "Your Contact Information", "type": "text" }
          ]
        },
      
        "Vandalism Report": {
          "template": `
            Date of Vandalism: {Date}
            Time of Vandalism: {Time}
            Location: {Location}
      
            Vandalism Report
      
            Description of Vandalism:
            {Description}
      
            Nature of Damage:
            {DamageDescription}
      
            Affected Property:
            {AffectedProperty}
      
            Witnesses:
            {WitnessNames}
      
            Evidence Collected:
            {EvidenceDetails}
      
            Reporting Officer:
            {OfficerName}
            {OfficerBadgeNumber}
      
            Additional Notes:
            {AdditionalNotes}
      
            Report Filed By:
            {YourName}
            {YourContactInformation}
          `,
          "fields": [
            { "id": "Date", "label": "Date of Vandalism", "type": "date" },
            { "id": "Time", "label": "Time of Vandalism", "type": "time" },
            { "id": "Location", "label": "Location", "type": "text" },
            { "id": "Description", "label": "Description of Vandalism", "type": "textarea" },
            { "id": "DamageDescription", "label": "Nature of Damage", "type": "textarea" },
            { "id": "AffectedProperty", "label": "Affected Property", "type": "text" },
            { "id": "WitnessNames", "label": "Witness Names", "type": "text" },
            { "id": "EvidenceDetails", "label": "Evidence Collected", "type": "textarea" },
            { "id": "OfficerName", "label": "Reporting Officer Name", "type": "text" },
            { "id": "OfficerBadgeNumber", "label": "Officer Badge Number", "type": "text" },
            { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
            { "id": "YourName", "label": "Your Name", "type": "text" },
            { "id": "YourContactInformation", "label": "Your Contact Information", "type": "text" }
          ]
        },
      
        "Fraud Report": {
          "template": `
            Date of Fraud: {Date}
            Time of Fraud: {Time}
            Location: {Location}
      
            Fraud Report
      
            Description of Fraud:
            {Description}
      
            Nature of Fraud:
            {FraudNature}
      
            Affected Individuals:
            {AffectedIndividuals}
      
            Financial Impact:
            {FinancialImpact}
      
            Evidence Collected:
            {EvidenceDetails}
      
            Reporting Officer:
            {OfficerName}
            {OfficerBadgeNumber}
      
            Additional Notes:
            {AdditionalNotes}
      
            Report Filed By:
            {YourName}
            {YourContactInformation}
          `,
          "fields": [
            { "id": "Date", "label": "Date of Fraud", "type": "date" },
            { "id": "Time", "label": "Time of Fraud", "type": "time" },
            { "id": "Location", "label": "Location", "type": "text" },
            { "id": "Description", "label": "Description of Fraud", "type": "textarea" },
            { "id": "FraudNature", "label": "Nature of Fraud", "type": "text" },
            { "id": "AffectedIndividuals", "label": "Affected Individuals", "type": "textarea" },
            { "id": "FinancialImpact", "label": "Financial Impact", "type": "text" },
            { "id": "EvidenceDetails", "label": "Evidence Collected", "type": "textarea" },
            { "id": "OfficerName", "label": "Reporting Officer Name", "type": "text" },
            { "id": "OfficerBadgeNumber", "label": "Officer Badge Number", "type": "text" },
            { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
            { "id": "YourName", "label": "Your Name", "type": "text" },
            { "id": "YourContactInformation", "label": "Your Contact Information", "type": "text" }
          ]
        },
      
        "Assault Report": {
          "template": `
            Date of Assault: {Date}
            Time of Assault: {Time}
            Location: {Location}
      
            Assault Report
      
            Description of Assault:
            {Description}
      
            Nature of Assault:
            {AssaultNature}
      
            Victim Information:
            {VictimInfo}
      
            Suspect Information:
            {SuspectInfo}
      
            Witnesses:
            {WitnessNames}
      
            Evidence Collected:
            {EvidenceDetails}
      
            Reporting Officer:
            {OfficerName}
            {OfficerBadgeNumber}
      
            Additional Notes:
            {AdditionalNotes}
      
            Report Filed By:
            {YourName}
            {YourContactInformation}
          `,
          "fields": [
            { "id": "Date", "label": "Date of Assault", "type": "date" },
            { "id": "Time", "label": "Time of Assault", "type": "time" },
            { "id": "Location", "label": "Location", "type": "text" },
            { "id": "Description", "label": "Description of Assault", "type": "textarea" },
            { "id": "AssaultNature", "label": "Nature of Assault", "type": "text" },
            { "id": "VictimInfo", "label": "Victim Information", "type": "textarea" },
            { "id": "SuspectInfo", "label": "Suspect Information", "type": "textarea" },
            { "id": "WitnessNames", "label": "Witness Names", "type": "text" },
            { "id": "EvidenceDetails", "label": "Evidence Collected", "type": "textarea" },
            { "id": "OfficerName", "label": "Reporting Officer Name", "type": "text" },
            { "id": "OfficerBadgeNumber", "label": "Officer Badge Number", "type": "text" },
            { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
            { "id": "YourName", "label": "Your Name", "type": "text" },
            { "id": "YourContactInformation", "label": "Your Contact Information", "type": "text" }
          ]
        },
      
        "Robbery Report": {
          "template": `
            Date of Robbery: {Date}
            Time of Robbery: {Time}
            Location: {Location}
      
            Robbery Report
      
            Description of Robbery:
            {Description}
      
            Method of Robbery:
            {RobberyMethod}
      
            Items Stolen:
            {ItemsStolen}
      
            Suspect Description:
            {SuspectDescription}
      
            Witnesses:
            {WitnessNames}
      
            Evidence Collected:
            {EvidenceDetails}
      
            Reporting Officer:
            {OfficerName}
            {OfficerBadgeNumber}
      
            Additional Notes:
            {AdditionalNotes}
      
            Report Filed By:
            {YourName}
            {YourContactInformation}
          `,
          "fields": [
            { "id": "Date", "label": "Date of Robbery", "type": "date" },
            { "id": "Time", "label": "Time of Robbery", "type": "time" },
            { "id": "Location", "label": "Location", "type": "text" },
            { "id": "Description", "label": "Description of Robbery", "type": "textarea" },
            { "id": "RobberyMethod", "label": "Method of Robbery", "type": "text" },
            { "id": "ItemsStolen", "label": "Items Stolen", "type": "textarea" },
            { "id": "SuspectDescription", "label": "Suspect Description", "type": "text" },
            { "id": "WitnessNames", "label": "Witness Names", "type": "text" },
            { "id": "EvidenceDetails", "label": "Evidence Collected", "type": "textarea" },
            { "id": "OfficerName", "label": "Reporting Officer Name", "type": "text" },
            { "id": "OfficerBadgeNumber", "label": "Officer Badge Number", "type": "text" },
            { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
            { "id": "YourName", "label": "Your Name", "type": "text" },
            { "id": "YourContactInformation", "label": "Your Contact Information", "type": "text" }
          ]
        }
      },

      "Victim Support Services Request":{
        "Restraining Order Request": {
            template: `
            **Date:** {Date}
            **Recipient:** {CourtName}
            **Case Number:** {CaseNumber}
      
            **Restraining Order Request**
      
            **Requestor Information:**
            - **Name:** {RequestorName}
            - **Address:** {RequestorAddress}
            - **Phone Number:** {RequestorPhoneNumber}
            - **Email Address:** {RequestorEmailAddress}
      
            **Respondent Information:**
            - **Name:** {RespondentName}
            - **Address:** {RespondentAddress}
            - **Phone Number:** {RespondentPhoneNumber}
      
            **Reason for Request:**
            {ReasonForRequest}
      
            **Description of Incidents:**
            {IncidentDescription}
      
            **Evidence Submitted:**
            {EvidenceDetails}
      
            **Requested Actions:**
            {RequestedActions}
      
            **Additional Notes:**
            {AdditionalNotes}
      
            **Requestor Signature:**
            - **Name:** {RequestorName}
            - **Date:** {SignatureDate}
          `,
          fields: [
            { "name": "Date", "type": "date", "label": "Date" },
            { "name": "CourtName", "type": "text", "label": "Recipient (Court Name)" },
            { "name": "CaseNumber", "type": "text", "label": "Case Number" },
            { "name": "RequestorName", "type": "text", "label": "Requestor Name" },
            { "name": "RequestorAddress", "type": "text", "label": "Requestor Address" },
            { "name": "RequestorPhoneNumber", "type": "tel", "label": "Requestor Phone Number" },
            { "name": "RequestorEmailAddress", "type": "email", "label": "Requestor Email Address" },
            { "name": "RespondentName", "type": "text", "label": "Respondent Name" },
            { "name": "RespondentAddress", "type": "text", "label": "Respondent Address" },
            { "name": "RespondentPhoneNumber", "type": "tel", "label": "Respondent Phone Number" },
            { "name": "ReasonForRequest", "type": "textarea", "label": "Reason for Request" },
            { "name": "IncidentDescription", "type": "textarea", "label": "Description of Incidents" },
            { "name": "EvidenceDetails", "type": "textarea", "label": "Evidence Submitted" },
            { "name": "RequestedActions", "type": "textarea", "label": "Requested Actions" },
            { "name": "AdditionalNotes", "type": "textarea", "label": "Additional Notes" },
            { "name": "SignatureName", "type": "text", "label": "Signature Name" },
            { "name": "SignatureDate", "type": "date", "label": "Signature Date" }
          ]
        },
      
        "Protective Custody Request": {
          template: `
            **Date:** {Date}
            **Recipient:** {AgencyName}
            **Case Number:** {CaseNumber}
      
            **Protective Custody Request**
      
            **Requestor Information:**
            - **Name:** {RequestorName}
            - **Address:** {RequestorAddress}
            - **Phone Number:** {RequestorPhoneNumber}
            - **Email Address:** {RequestorEmailAddress}
      
            **Reason for Protective Custody:**
            {ReasonForCustody}
      
            **Threat Details:**
            {ThreatDetails}
      
            **Current Location:**
            {CurrentLocation}
      
            **Requested Protection Measures:**
            {ProtectionMeasures}
      
            **Supporting Documents:**
            {SupportingDocuments}
      
            **Additional Notes:**
            {AdditionalNotes}
      
            **Requestor Signature:**
            - **Name:** {RequestorName}
            - **Date:** {SignatureDate}
          `,
          fields: [
            { "name": "Date", "type": "date", "label": "Date" },
            { "name": "AgencyName", "type": "text", "label": "Recipient (Agency Name)" },
            { "name": "CaseNumber", "type": "text", "label": "Case Number" },
            { "name": "RequestorName", "type": "text", "label": "Requestor Name" },
            { "name": "RequestorAddress", "type": "text", "label": "Requestor Address" },
            { "name": "RequestorPhoneNumber", "type": "tel", "label": "Requestor Phone Number" },
            { "name": "RequestorEmailAddress", "type": "email", "label": "Requestor Email Address" },
            { "name": "ReasonForCustody", "type": "textarea", "label": "Reason for Protective Custody" },
            { "name": "ThreatDetails", "type": "textarea", "label": "Threat Details" },
            { "name": "CurrentLocation", "type": "text", "label": "Current Location" },
            { "name": "ProtectionMeasures", "type": "textarea", "label": "Requested Protection Measures" },
            { "name": "SupportingDocuments", "type": "textarea", "label": "Supporting Documents" },
            { "name": "AdditionalNotes", "type": "textarea", "label": "Additional Notes" },
            { "name": "SignatureName", "type": "text", "label": "Signature Name" },
            { "name": "SignatureDate", "type": "date", "label": "Signature Date" }
          ]
        },
      
        "Safety Plan Request": {
          template: `
            **Date:** {Date}
            **Recipient:** {AgencyName}
            **Case Number:** {CaseNumber}
      
            **Safety Plan Request**
      
            **Requestor Information:**
            - **Name:** {RequestorName}
            - **Address:** {RequestorAddress}
            - **Phone Number:** {RequestorPhoneNumber}
            - **Email Address:** {RequestorEmailAddress}
      
            **Reason for Request:**
            {ReasonForRequest}
      
            **Details of Safety Concerns:**
            {SafetyConcerns}
      
            **Requested Safety Measures:**
            {RequestedMeasures}
      
            **Emergency Contacts:**
            {EmergencyContacts}
      
            **Additional Notes:**
            {AdditionalNotes}
      
            **Requestor Signature:**
            - **Name:** {RequestorName}
            - **Date:** {SignatureDate}
          `,
          fields: [
            { "name": "Date", "type": "date", "label": "Date" },
            { "name": "AgencyName", "type": "text", "label": "Recipient (Agency Name)" },
            { "name": "CaseNumber", "type": "text", "label": "Case Number" },
            { "name": "RequestorName", "type": "text", "label": "Requestor Name" },
            { "name": "RequestorAddress", "type": "text", "label": "Requestor Address" },
            { "name": "RequestorPhoneNumber", "type": "tel", "label": "Requestor Phone Number" },
            { "name": "RequestorEmailAddress", "type": "email", "label": "Requestor Email Address" },
            { "name": "ReasonForRequest", "type": "textarea", "label": "Reason for Request" },
            { "name": "SafetyConcerns", "type": "textarea", "label": "Details of Safety Concerns" },
            { "name": "RequestedMeasures", "type": "textarea", "label": "Requested Safety Measures" },
            { "name": "EmergencyContacts", "type": "textarea", "label": "Emergency Contacts" },
            { "name": "AdditionalNotes", "type": "textarea", "label": "Additional Notes" },
            { "name": "SignatureName", "type": "text", "label": "Signature Name" },
            { "name": "SignatureDate", "type": "date", "label": "Signature Date" }
          ]
        },
      
        "Emergency Contact Information Update": {
          template: `
            **Date:** {Date}
            **Recipient:** {AgencyName}
      
            **Emergency Contact Information Update**
      
            **Current Contact Information:**
            - **Name:** {CurrentContactName}
            - **Address:** {CurrentContactAddress}
            - **Phone Number:** {CurrentContactPhoneNumber}
            - **Email Address:** {CurrentContactEmailAddress}
      
            **Updated Contact Information:**
            - **Name:** {UpdatedContactName}
            - **Address:** {UpdatedContactAddress}
            - **Phone Number:** {UpdatedContactPhoneNumber}
            - **Email Address:** {UpdatedContactEmailAddress}
      
            **Reason for Update:**
            {ReasonForUpdate}
      
            **Additional Notes:**
            {AdditionalNotes}
      
            **Signature:**
            - **Name:** {SignatureName}
            - **Date:** {SignatureDate}
          `,
          fields: [
            { "name": "Date", "type": "date", "label": "Date" },
            { "name": "AgencyName", "type": "text", "label": "Recipient (Agency Name)" },
            { "name": "CurrentContactName", "type": "text", "label": "Current Contact Name" },
            { "name": "CurrentContactAddress", "type": "text", "label": "Current Contact Address" },
            { "name": "CurrentContactPhoneNumber", "type": "tel", "label": "Current Contact Phone Number" },
            { "name": "CurrentContactEmailAddress", "type": "email", "label": "Current Contact Email Address" },
            { "name": "UpdatedContactName", "type": "text", "label": "Updated Contact Name" },
            { "name": "UpdatedContactAddress", "type": "text", "label": "Updated Contact Address" },
            { "name": "UpdatedContactPhoneNumber", "type": "tel", "label": "Updated Contact Phone Number" },
            { "name": "UpdatedContactEmailAddress", "type": "email", "label": "Updated Contact Email Address" },
            { "name": "ReasonForUpdate", "type": "textarea", "label": "Reason for Update" },
            { "name": "AdditionalNotes", "type": "textarea", "label": "Additional Notes" },
            { "name": "SignatureName", "type": "text", "label": "Signature Name" },
            { "name": "SignatureDate", "type": "date", "label": "Signature Date" }
          ]
        },
      
        "Witness Protection Request": {
          template: `
            **Date:** {Date}
            **Recipient:** {AgencyName}
            **Case Number:** {CaseNumber}
      
            **Witness Protection Request**
      
            **Witness Information:**
            - **Name:** {WitnessName}
            - **Address:** {WitnessAddress}
            - **Phone Number:** {WitnessPhoneNumber}
            - **Email Address:** {WitnessEmailAddress}
      
            **Reason for Protection:**
            {ReasonForProtection}
      
            **Threat Details:**
            {ThreatDetails}
      
            **Requested Protection Measures:**
            {ProtectionMeasures}
      
            **Supporting Evidence:**
            {SupportingEvidence}
      
            **Additional Notes:**
            {AdditionalNotes}
      
            **Witness Signature:**
            - **Name:** {WitnessName}
            - **Date:** {SignatureDate}
          `,
          fields: [
            { "name": "Date", "type": "date", "label": "Date" },
            { "name": "AgencyName", "type": "text", "label": "Recipient (Agency Name)" },
            { "name": "CaseNumber", "type": "text", "label": "Case Number" },
            { "name": "WitnessName", "type": "text", "label": "Witness Name" },
            { "name": "WitnessAddress", "type": "text", "label": "Witness Address" },
            { "name": "WitnessPhoneNumber", "type": "tel", "label": "Witness Phone Number" },
            { "name": "WitnessEmailAddress", "type": "email", "label": "Witness Email Address" },
            { "name": "ReasonForProtection", "type": "textarea", "label": "Reason for Protection" },
            { "name": "ThreatDetails", "type": "textarea", "label": "Threat Details" },
            { "name": "ProtectionMeasures", "type": "textarea", "label": "Requested Protection Measures" },
            { "name": "SupportingEvidence", "type": "textarea", "label": "Supporting Evidence" },
            { "name": "AdditionalNotes", "type": "textarea", "label": "Additional Notes" },
            { "name": "SignatureName", "type": "text", "label": "Signature Name" },
            { "name": "SignatureDate", "type": "date", "label": "Signature Date" }
          ]
        },
      
        "Security Assessment Request": {
          template: `
            **Date:** {Date}
            **Recipient:** {AgencyName}
      
            **Security Assessment Request**
      
            **Requestor Information:**
            - **Name:** {RequestorName}
            - **Address:** {RequestorAddress}
            - **Phone Number:** {RequestorPhoneNumber}
            - **Email Address:** {RequestorEmailAddress}
      
            **Location for Assessment:**
            {AssessmentLocation}
      
            **Reason for Assessment:**
            {ReasonForAssessment}
      
            **Specific Concerns:**
            {SpecificConcerns}
      
            **Requested Assessment Details:**
            {RequestedDetails}
      
            **Additional Notes:**
            {AdditionalNotes}
      
            **Requestor Signature:**
            - **Name:** {RequestorName}
            - **Date:** {SignatureDate}
          `,
          fields: [
            { "name": "Date", "type": "date", "label": "Date" },
            { "name": "AgencyName", "type": "text", "label": "Recipient (Agency Name)" },
            { "name": "RequestorName", "type": "text", "label": "Requestor Name" },
            { "name": "RequestorAddress", "type": "text", "label": "Requestor Address" },
            { "name": "RequestorPhoneNumber", "type": "tel", "label": "Requestor Phone Number" },
            { "name": "RequestorEmailAddress", "type": "email", "label": "Requestor Email Address" },
            { "name": "AssessmentLocation", "type": "text", "label": "Location for Assessment" },
            { "name": "ReasonForAssessment", "type": "textarea", "label": "Reason for Assessment" },
            { "name": "SpecificConcerns", "type": "textarea", "label": "Specific Concerns" },
            { "name": "RequestedDetails", "type": "textarea", "label": "Requested Assessment Details" },
            { "name": "AdditionalNotes", "type": "textarea", "label": "Additional Notes" },
            { "name": "SignatureName", "type": "text", "label": "Signature Name" },
            { "name": "SignatureDate", "type": "date", "label": "Signature Date" }
          ]
        },
      
        "Victim Support Services Request": {
          template: `
            **Date:** {Date}
            **Recipient:** {AgencyName}
      
            **Victim Support Services Request**
      
            **Victim Information:**
            - **Name:** {VictimName}
            - **Address:** {VictimAddress}
            - **Phone Number:** {VictimPhoneNumber}
            - **Email Address:** {VictimEmailAddress}
      
            **Type of Support Requested:**
            {SupportType}
      
            **Reason for Request:**
            {ReasonForRequest}
      
            **Specific Services Needed:**
            {ServicesNeeded}
      
            **Additional Notes:**
            {AdditionalNotes}
      
            **Victim Signature:**
            - **Name:** {VictimName}
            - **Date:** {SignatureDate}
          `,
          fields: [
            { "name": "Date", "type": "date", "label": "Date" },
            { "name": "AgencyName", "type": "text", "label": "Recipient (Agency Name)" },
            { "name": "VictimName", "type": "text", "label": "Victim Name" },
            { "name": "VictimAddress", "type": "text", "label": "Victim Address" },
            { "name": "VictimPhoneNumber", "type": "tel", "label": "Victim Phone Number" },
            { "name": "VictimEmailAddress", "type": "email", "label": "Victim Email Address" },
            { "name": "SupportType", "type": "text", "label": "Type of Support Requested" },
            { "name": "ReasonForRequest", "type": "textarea", "label": "Reason for Request" },
            { "name": "ServicesNeeded", "type": "textarea", "label": "Specific Services Needed" },
            { "name": "AdditionalNotes", "type": "textarea", "label": "Additional Notes" },
            { "name": "SignatureName", "type": "text", "label": "Signature Name" },
            { "name": "SignatureDate", "type": "date", "label": "Signature Date" }
          ]
        }
      },

      "Account Management":{
         "Account Creation Request": {
      template: `
        **Date:** {RequestDate}
        **Recipient:** {DepartmentName}

        **Subject:** Account Creation Request

        Dear Sir/Madam,

        I am writing to request the creation of a new account. Please find the details below:

        **Requester Information:**
        - **Name:** {RequesterName}
        - **Email Address:** {RequesterEmailAddress}
        - **Phone Number:** {RequesterPhoneNumber}

        **Account Details:**
        - **Account Type:** {AccountType}
        - **Username:** {Username}
        - **Preferred Email Address:** {PreferredEmail}

        **Reason for Account Creation:**
        {ReasonForCreation}

        **Additional Notes:**
        {AdditionalNotes}

        **Signature:**
        - **Name:** {SignatureName}
        - **Date:** {SignatureDate}

        Thank you for your attention to this matter.

        Sincerely,
        {RequesterName}
      `,
      fields: [
        { "id": "RequestDate", "label": "Request Date", "type": "date" },
        { "id": "DepartmentName", "label": "Recipient (Department Name)", "type": "text" },
        { "id": "RequesterName", "label": "Requester Name", "type": "text" },
        { "id": "RequesterEmailAddress", "label": "Requester Email Address", "type": "email" },
        { "id": "RequesterPhoneNumber", "label": "Requester Phone Number", "type": "tel" },
        { "id": "AccountType", "label": "Account Type", "type": "text" },
        { "id": "Username", "label": "Username", "type": "text" },
        { "id": "PreferredEmail", "label": "Preferred Email Address", "type": "email" },
        { "id": "ReasonForCreation", "label": "Reason for Account Creation", "type": "textarea" },
        { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
        { "id": "SignatureName", "label": "Signature Name", "type": "text" },
        { "id": "SignatureDate", "label": "Signature Date", "type": "date" }
      ]
    },
    
    "Account Deletion Request": {
      template: `
        **Date:** {RequestDate}
        **Recipient:** {DepartmentName}

        **Subject:** Account Deletion Request

        Dear Sir/Madam,

        I am writing to request the deletion of my account. Please find the details below:

        **Requester Information:**
        - **Name:** {RequesterName}
        - **Email Address:** {RequesterEmailAddress}
        - **Phone Number:** {RequesterPhoneNumber}

        **Account Details:**
        - **Account Type:** {AccountType}
        - **Username:** {Username}

        **Reason for Deletion:**
        {ReasonForDeletion}

        **Additional Notes:**
        {AdditionalNotes}

        **Signature:**
        - **Name:** {SignatureName}
        - **Date:** {SignatureDate}

        Thank you for your prompt attention to this request.

        Sincerely,
        {RequesterName}
      `,
      fields: [
        { "id": "RequestDate", "label": "Request Date", "type": "date" },
        { "id": "DepartmentName", "label": "Recipient (Department Name)", "type": "text" },
        { "id": "RequesterName", "label": "Requester Name", "type": "text" },
        { "id": "RequesterEmailAddress", "label": "Requester Email Address", "type": "email" },
        { "id": "RequesterPhoneNumber", "label": "Requester Phone Number", "type": "tel" },
        { "id": "AccountType", "label": "Account Type", "type": "text" },
        { "id": "Username", "label": "Username", "type": "text" },
        { "id": "ReasonForDeletion", "label": "Reason for Deletion", "type": "textarea" },
        { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
        { "id": "SignatureName", "label": "Signature Name", "type": "text" },
        { "id": "SignatureDate", "label": "Signature Date", "type": "date" }
      ]
    },
    
    "Account Information Update Request": {
      template: `
        **Date:** {RequestDate}
        **Recipient:** {DepartmentName}

        **Subject:** Account Information Update Request

        Dear Sir/Madam,

        I am writing to request an update to my account information.
         Please find the details below:

        **Requester Information:**
        - **Name:** {RequesterName}
        - **Email Address:** {RequesterEmailAddress}
        - **Phone Number:** {RequesterPhoneNumber}

        **Account Details:**
        - **Account Type:** {AccountType}
        - **Username:** {Username}

        **Information to be Updated:**
        {InformationToUpdate}

        **Reason for Update:**
        {ReasonForUpdate}

        **Additional Notes:**
        {AdditionalNotes}

        **Signature:**
        - **Name:** {SignatureName}
        - **Date:** {SignatureDate}

        Thank you for processing this request.

        Sincerely,
        {RequesterName}
      `,
      fields: [
        { "id": "RequestDate", "label": "Request Date", "type": "date" },
        { "id": "DepartmentName", "label": "Recipient (Department Name)", "type": "text" },
        { "id": "RequesterName", "label": "Requester Name", "type": "text" },
        { "id": "RequesterEmailAddress", "label": "Requester Email Address", "type": "email" },
        { "id": "RequesterPhoneNumber", "label": "Requester Phone Number", "type": "tel" },
        { "id": "AccountType", "label": "Account Type", "type": "text" },
        { "id": "Username", "label": "Username", "type": "text" },
        { "id": "InformationToUpdate", "label": "Information to be Updated", "type": "textarea" },
        { "id": "ReasonForUpdate", "label": "Reason for Update", "type": "textarea" },
        { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
        { "id": "SignatureName", "label": "Signature Name", "type": "text" },
        { "id": "SignatureDate", "label": "Signature Date", "type": "date" }
      ]
    },
    
    "Password Reset Request": {
      template: `
        **Date:** {RequestDate}
        **Recipient:** {DepartmentName}

        **Subject:** Password Reset Request

        Dear Sir/Madam,

        I am writing to request a password reset for my account. Please find the details below:

        **Requester Information:**
        - **Name:** {RequesterName}
        - **Email Address:** {RequesterEmailAddress}
        - **Phone Number:** {RequesterPhoneNumber}

        **Account Details:**
        - **Account Type:** {AccountType}
        - **Username:** {Username}

        **Reason for Password Reset:**
        {ReasonForPasswordReset}

        **Additional Notes:**
        {AdditionalNotes}

        **Signature:**
        - **Name:** {SignatureName}
        - **Date:** {SignatureDate}

        Thank you for your assistance.

        Sincerely,
        {RequesterName}
      `,
      fields: [
        { "id": "RequestDate", "label": "Request Date", "type": "date" },
        { "id": "DepartmentName", "label": "Recipient (Department Name)", "type": "text" },
        { "id": "RequesterName", "label": "Requester Name", "type": "text" },
        { "id": "RequesterEmailAddress", "label": "Requester Email Address", "type": "email" },
        { "id": "RequesterPhoneNumber", "label": "Requester Phone Number", "type": "tel" },
        { "id": "AccountType", "label": "Account Type", "type": "text" },
        { "id": "Username", "label": "Username", "type": "text" },
        { "id": "ReasonForPasswordReset", "label": "Reason for Password Reset", "type": "textarea" },
        { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
        { "id": "SignatureName", "label": "Signature Name", "type": "text" },
        { "id": "SignatureDate", "label": "Signature Date", "type": "date" }
      ]
    },

    "Account Reactivation Request": {
      template: `
        **Date:** {RequestDate}
        **Recipient:** {DepartmentName}

        **Subject:** Account Reactivation Request

        Dear Sir/Madam,

        I am writing to request the reactivation of my account. 
        Please find the details below:

        **Requester Information:**
        - **Name:** {RequesterName}
        - **Email Address:** {RequesterEmailAddress}
        - **Phone Number:** {RequesterPhoneNumber}

        **Account Details:**
        - **Account Type:** {AccountType}
        - **Username:** {Username}

        **Reason for Reactivation:**
        {ReasonForReactivation}

        **Additional Notes:**
        {AdditionalNotes}

        **Signature:**
        - **Name:** {SignatureName}
        - **Date:** {SignatureDate}

        Thank you for your prompt attention to this matter.

        Sincerely,
        {RequesterName}
      `,
      fields: [
        { "id": "RequestDate", "label": "Request Date", "type": "date" },
        { "id": "DepartmentName", "label": "Recipient (Department Name)", "type": "text" },
        { "id": "RequesterName", "label": "Requester Name", "type": "text" },
        { "id": "RequesterEmailAddress", "label": "Requester Email Address", "type": "email" },
        { "id": "RequesterPhoneNumber", "label": "Requester Phone Number", "type": "tel" },
        { "id": "AccountType", "label": "Account Type", "type": "text" },
        { "id": "Username", "label": "Username", "type": "text" },
        { "id": "ReasonForReactivation", "label": "Reason for Reactivation", "type": "textarea" },
        { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
        { "id": "SignatureName", "label": "Signature Name", "type": "text" },
        { "id": "SignatureDate", "label": "Signature Date", "type": "date" }
      ]
    },

    "Account Suspension Request": {
      template: `
        **Date:** {RequestDate}
        **Recipient:** {DepartmentName}

        **Subject:** Account Suspension Request

        Dear Sir/Madam,

        I am writing to request the suspension of my account.
         Please find the details below:

        **Requester Information:**
        - **Name:** {RequesterName}
        - **Email Address:** {RequesterEmailAddress}
        - **Phone Number:** {RequesterPhoneNumber}

        **Account Details:**
        - **Account Type:** {AccountType}
        - **Username:** {Username}

        **Reason for Suspension:**
        {ReasonForSuspension}

        **Additional Notes:**
        {AdditionalNotes}

        **Signature:**
        - **Name:** {SignatureName}
        - **Date:** {SignatureDate}

        Thank you for your prompt attention to this request.

        Sincerely,
        {RequesterName}
      `,
      fields: [
        { "id": "RequestDate", "label": "Request Date", "type": "date" },
        { "id": "DepartmentName", "label": "Recipient (Department Name)", "type": "text" },
        { "id": "RequesterName", "label": "Requester Name", "type": "text" },
        { "id": "RequesterEmailAddress", "label": "Requester Email Address", "type": "email" },
        { "id": "RequesterPhoneNumber", "label": "Requester Phone Number", "type": "tel" },
        { "id": "AccountType", "label": "Account Type", "type": "text" },
        { "id": "Username", "label": "Username", "type": "text" },
        { "id": "ReasonForSuspension", "label": "Reason for Suspension", "type": "textarea" },
        { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
        { "id": "SignatureName", "label": "Signature Name", "type": "text" },
        { "id": "SignatureDate", "label": "Signature Date", "type": "date" }
      ]
    },

    "Permission Change Request": {
      template: `
        **Date:** {RequestDate}
        **Recipient:** {DepartmentName}

        **Subject:** Permission Change Request

        Dear Sir/Madam,

        I am writing to request a change in permissions for my account.
         Please find the details below:

        **Requester Information:**
        - **Name:** {RequesterName}
        - **Email Address:** {RequesterEmailAddress}
        - **Phone Number:** {RequesterPhoneNumber}

        **Account Details:**
        - **Account Type:** {AccountType}
        - **Username:** {Username}

        **Current Permissions:**
        {CurrentPermissions}

        **Requested Permissions:**
        {RequestedPermissions}

        **Reason for Change:**
        {ReasonForChange}

        **Additional Notes:**
        {AdditionalNotes}

        **Signature:**
        - **Name:** {SignatureName}
        - **Date:** {SignatureDate}

        Thank you for considering this request.

        Sincerely,
        {RequesterName}
      `,
      fields: [
        { "id": "RequestDate", "label": "Request Date", "type": "date" },
        { "id": "DepartmentName", "label": "Recipient (Department Name)", "type": "text" },
        { "id": "RequesterName", "label": "Requester Name", "type": "text" },
        { "id": "RequesterEmailAddress", "label": "Requester Email Address", "type": "email" },
        { "id": "RequesterPhoneNumber", "label": "Requester Phone Number", "type": "tel" },
        { "id": "AccountType", "label": "Account Type", "type": "text" },
        { "id": "Username", "label": "Username", "type": "text" },
        { "id": "CurrentPermissions", "label": "Current Permissions", "type": "textarea" },
        { "id": "RequestedPermissions", "label": "Requested Permissions", "type": "textarea" },
        { "id": "ReasonForChange", "label": "Reason for Change", "type": "textarea" },
        { "id": "AdditionalNotes", "label": "Additional Notes", "type": "textarea" },
        { "id": "SignatureName", "label": "Signature Name", "type": "text" },
        { "id": "SignatureDate", "label": "Signature Date", "type": "date" }
      ]
    }
  
      },
      "Transaction Letters":{

        'Acknowledgment of Receipt of Payment': {
      template: `
        Subject: Acknowledgment of Receipt of Payment

        Dear {RecipientName},

        We acknowledge the receipt of your payment of {Amount} made on {PaymentDate} for 
        invoice number {InvoiceNumber}.

        Thank you for your prompt payment.

        Sincerely,
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'Amount', label: 'Amount', type: 'text' },
        { id: 'PaymentDate', label: 'Payment Date', type: 'date' },
        { id: 'InvoiceNumber', label: 'Invoice Number', type: 'text' }
      ]
    },
    'Confirmation of Transaction': {
      template: `
        Subject: Confirmation of Transaction

        Dear {RecipientName},

        This is to confirm that the transaction of {Amount} with transaction ID {TransactionID} 
        was completed successfully on {PaymentDate}.

        If you have any questions, please contact us.

        Best regards,
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'Amount', label: 'Amount', type: 'text' },
        { id: 'TransactionID', label: 'Transaction ID', type: 'text' },
        { id: 'PaymentDate', label: 'Payment Date', type: 'date' }
      ]
    },
    'Notification of Payment Due': {
      template: `
        Subject: Notification of Payment Due

        Dear {RecipientName},

        This is a reminder that payment of {Amount} for invoice number {InvoiceNumber} 
        is due on {DueDate}.

        Please ensure timely payment to avoid any late fees.

        Thank you,
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'Amount', label: 'Amount', type: 'text' },
        { id: 'InvoiceNumber', label: 'Invoice Number', type: 'text' },
        { id: 'DueDate', label: 'Due Date', type: 'date' }
      ]
    },
    'Payment Overdue Notice': {
      template: `
        Subject: Payment Overdue Notice

        Dear {RecipientName},

        We would like to remind you that your payment of {Amount} for invoice 
        number {InvoiceNumber} is overdue.

        As of today, the payment is {NumberOfDays} days past due. Please arrange for 
        immediate payment to avoid further action.

        Regards,
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'Amount', label: 'Amount', type: 'text' },
        { id: 'InvoiceNumber', label: 'Invoice Number', type: 'text' },
        { id: 'NumberOfDays', label: 'Number of Days Overdue', type: 'number' }
      ]
    },
    'Refund Request Confirmation': {
      template: `
        Subject: Refund Request Confirmation

        Dear {RecipientName},

        We have received your request for a refund of {RefundAmount}. 
        We are processing your request and will notify you once the refund has been issued.

        Thank you for your patience.

        Sincerely,
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'RefundAmount', label: 'Refund Amount', type: 'text' }
      ]
    },
    'Dispute Resolution Acknowledgment': {
      template: `
        Subject: Dispute Resolution Acknowledgment

        Dear {RecipientName},

        We have received your dispute regarding {DisputeIssue}.
         Our team is currently reviewing the matter and will get back to you with 
         a resolution as soon as possible.

        We appreciate your patience during this process.

        Best regards,
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'DisputeIssue', label: 'Dispute Issue', type: 'text' }
      ]
    },
    'Cancellation of Transaction Notice': {
      template: `
        Subject: Cancellation of Transaction Notice

        Dear {RecipientName},

        This is to inform you that the transaction of {Amount} has been 
        canceled due to {CancellationReason}.

        Please contact us if you have any questions or need further assistance.

        Sincerely,
        {YourName}
        {YourPosition}
        {YourCompany}
        {YourAddress}
        {City}, {State}, {ZIPCode}
        {YourContactNumber}
        {YourEmail}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'Amount', label: 'Amount', type: 'text' },
        { id: 'CancellationReason', label: 'Cancellation Reason', type: 'text' }
      ]
    },
      },

      "Loan and Mortgage":{
        'Loan Approval Letter': {
      template: `
        Subject: Loan Approval Notification

        Dear {BorrowerName},

        We are pleased to inform you that your loan application for {LoanAmount} has been approved. 
        Below are the details of your loan:

        - **Loan Amount**: {LoanAmount}
        - **Loan Term**: {LoanTerm}
        - **Interest Rate**: {InterestRate}
        - **Monthly Payment**: {MonthlyPayment}
        - **Start Date**: {StartDate}
        - **End Date**: {EndDate}

        Please review the terms and conditions attached and contact us if you have any questions.

        Sincerely,
        {LenderName}
        {LenderAddress}
        {LenderCity}, {LenderState} {LenderZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'BorrowerName', label: 'Borrower Name', type: 'text' },
        { id: 'LoanAmount', label: 'Loan Amount', type: 'text' },
        { id: 'LoanTerm', label: 'Loan Term', type: 'text' },
        { id: 'InterestRate', label: 'Interest Rate', type: 'text' },
        { id: 'MonthlyPayment', label: 'Monthly Payment', type: 'text' },
        { id: 'StartDate', label: 'Start Date', type: 'date' },
        { id: 'EndDate', label: 'End Date', type: 'date' },
        { id: 'LenderName', label: 'Lender Name', type: 'text' },
        { id: 'LenderAddress', label: 'Lender Address', type: 'text' },
        { id: 'LenderCity', label: 'Lender City', type: 'text' },
        { id: 'LenderState', label: 'Lender State', type: 'text' },
        { id: 'LenderZIPCode', label: 'Lender ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Loan Rejection Letter': {
      template: `
        Subject: Loan Application Rejection

        Dear {BorrowerName},

        We regret to inform you that your application for a loan of {LoanAmount} has been declined.
         The decision was based on {ReasonForRejection}.

        If you have any questions or need further information, please contact us.

        Sincerely,
        {LenderName}
        {LenderAddress}
        {LenderCity}, {LenderState} {LenderZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'BorrowerName', label: 'Borrower Name', type: 'text' },
        { id: 'LoanAmount', label: 'Loan Amount', type: 'text' },
        { id: 'ReasonForRejection', label: 'Reason for Rejection', type: 'text' },
        { id: 'LenderName', label: 'Lender Name', type: 'text' },
        { id: 'LenderAddress', label: 'Lender Address', type: 'text' },
        { id: 'LenderCity', label: 'Lender City', type: 'text' },
        { id: 'LenderState', label: 'Lender State', type: 'text' },
        { id: 'LenderZIPCode', label: 'Lender ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Mortgage Payment Reminder': {
      template: `
        Subject: Mortgage Payment Reminder

        Dear {BorrowerName},

        This is a reminder that your mortgage payment of {RepaymentAmount} is 
        due on {PaymentDueDate}. 

        - **Account Number**: {AccountNumber}
        - **Loan Number**: {LoanNumber}

        Please ensure that the payment is made by the due date to avoid any late fees.

        Sincerely,
        {LenderName}
        {LenderAddress}
        {LenderCity}, {LenderState} {LenderZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'BorrowerName', label: 'Borrower Name', type: 'text' },
        { id: 'RepaymentAmount', label: 'Repayment Amount', type: 'text' },
        { id: 'PaymentDueDate', label: 'Payment Due Date', type: 'date' },
        { id: 'AccountNumber', label: 'Account Number', type: 'text' },
        { id: 'LoanNumber', label: 'Loan Number', type: 'text' },
        { id: 'LenderName', label: 'Lender Name', type: 'text' },
        { id: 'LenderAddress', label: 'Lender Address', type: 'text' },
        { id: 'LenderCity', label: 'Lender City', type: 'text' },
        { id: 'LenderState', label: 'Lender State', type: 'text' },
        { id: 'LenderZIPCode', label: 'Lender ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Mortgage Default Notice': {
      template: `
        Subject: Mortgage Default Notice

        Dear {BorrowerName},

        This letter serves as a formal notice of default on your mortgage account.
         The details of the default are as follows:

        - **Default Date**: {DefaultDate}
        - **Reason for Default**: {DefaultReason}
        - **Settlement Amount**: {SettlementAmount}
        - **Settlement Date**: {SettlementDate}

        We request that you contact us immediately to discuss your options
         for resolving this matter.

        Sincerely,
        {LenderName}
        {LenderAddress}
        {LenderCity}, {LenderState} {LenderZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'BorrowerName', label: 'Borrower Name', type: 'text' },
        { id: 'DefaultDate', label: 'Default Date', type: 'date' },
        { id: 'DefaultReason', label: 'Reason for Default', type: 'text' },
        { id: 'SettlementAmount', label: 'Settlement Amount', type: 'text' },
        { id: 'SettlementDate', label: 'Settlement Date', type: 'date' },
        { id: 'LenderName', label: 'Lender Name', type: 'text' },
        { id: 'LenderAddress', label: 'Lender Address', type: 'text' },
        { id: 'LenderCity', label: 'Lender City', type: 'text' },
        { id: 'LenderState', label: 'Lender State', type: 'text' },
        { id: 'LenderZIPCode', label: 'Lender ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Loan Payment Confirmation': {
      template: `
        Subject: Loan Payment Confirmation

        Dear {BorrowerName},

        We have received your loan payment of {RepaymentAmount} on {PaymentDate}.
         Your updated balance is {RemainingBalance}.

        - **Account Number**: {AccountNumber}
        - **Loan Number**: {LoanNumber}

        Thank you for your timely payment.

        Sincerely,
        {LenderName}
        {LenderAddress}
        {LenderCity}, {LenderState} {LenderZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'BorrowerName', label: 'Borrower Name', type: 'text' },
        { id: 'RepaymentAmount', label: 'Repayment Amount', type: 'text' },
        { id: 'PaymentDate', label: 'Payment Date', type: 'date' },
        { id: 'RemainingBalance', label: 'Remaining Balance', type: 'text' },
        { id: 'AccountNumber', label: 'Account Number', type: 'text' },
        { id: 'LoanNumber', label: 'Loan Number', type: 'text' },
        { id: 'LenderName', label: 'Lender Name', type: 'text' },
        { id: 'LenderAddress', label: 'Lender Address', type: 'text' },
        { id: 'LenderCity', label: 'Lender City', type: 'text' },
        { id: 'LenderState', label: 'Lender State', type: 'text' },
        { id: 'LenderZIPCode', label: 'Lender ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Mortgage Modification Request': {
      template: `
        Subject: Request for Mortgage Modification

        Dear {LenderName},

        I am writing to request a modification of my mortgage terms due to {ReasonForModification}.
         The details of my mortgage are as follows:

        - **Loan Amount**: {LoanAmount}
        - **Current Monthly Payment**: {CurrentMonthlyPayment}
        - **Requested Modification**: {RequestedModification}

        I appreciate your consideration of my request and look forward to your response.

        Sincerely,
        {BorrowerName}
        {BorrowerAddress}
        {City}, {State} {ZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'LenderName', label: 'Lender Name', type: 'text' },
        { id: 'LoanAmount', label: 'Loan Amount', type: 'text' },
        { id: 'CurrentMonthlyPayment', label: 'Current Monthly Payment', type: 'text' },
        { id: 'RequestedModification', label: 'Requested Modification', type: 'text' },
        { id: 'ReasonForModification', label: 'Reason for Modification', type: 'text' },
        { id: 'BorrowerName', label: 'Borrower Name', type: 'text' },
        { id: 'BorrowerAddress', label: 'Borrower Address', type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIPCode', label: 'ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Loan Prepayment Notice': {
      template: `
        Subject: Loan Prepayment Notification

        Dear {LenderName},

        I am writing to notify you of my intention to prepay my loan in full.
         The details are as follows:

        - **Loan Number**: {LoanNumber}
        - **Amount Prepaid**: {PrepaymentAmount}
        - **Prepayment Date**: {PrepaymentDate}

        Please confirm receipt of this prepayment and adjust the loan balance accordingly.

        Sincerely,
        {BorrowerName}
        {BorrowerAddress}
        {City}, {State} {ZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'LenderName', label: 'Lender Name', type: 'text' },
        { id: 'LoanNumber', label: 'Loan Number', type: 'text' },
        { id: 'PrepaymentAmount', label: 'Prepayment Amount', type: 'text' },
        { id: 'PrepaymentDate', label: 'Prepayment Date', type: 'date' },
        { id: 'BorrowerName', label: 'Borrower Name', type: 'text' },
        { id: 'BorrowerAddress', label: 'Borrower Address', type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIPCode', label: 'ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
      },

      "Financial Assistance":{
        'Grant Approval Letter': {
      template: `
        Subject: Grant Approval Notification

        Dear {RecipientName},

        We are pleased to inform you that your application for financial assistance in the amount 
        of {AssistanceAmount} has been approved. 
        The details of the grant are as follows:

        - **Assistance Amount**: {AssistanceAmount}
        - **Purpose of Assistance**: {PurposeOfAssistance}
        - **Application Date**: {ApplicationDate}
        - **Decision Date**: {DecisionDate}
        - **Approval Status**: {ApprovalStatus}

        Please contact us if you need further information or have any questions.

        Sincerely,
        {ContactPerson}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'AssistanceAmount', label: 'Assistance Amount', type: 'text' },
        { id: 'PurposeOfAssistance', label: 'Purpose of Assistance', type: 'text' },
        { id: 'ApplicationDate', label: 'Application Date', type: 'date' },
        { id: 'DecisionDate', label: 'Decision Date', type: 'date' },
        { id: 'ApprovalStatus', label: 'Approval Status', type: 'text' },
        { id: 'ContactPerson', label: 'Contact Person', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Grant Rejection Letter': {
      template: `
        Subject: Grant Application Rejection

        Dear {RecipientName},

        We regret to inform you that your application for financial assistance in the amount 
        of {AssistanceAmount} has been declined. The decision was based on {RejectionReason}.

        We encourage you to apply again in the future if circumstances change.

        Sincerely,
        {ContactPerson}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'AssistanceAmount', label: 'Assistance Amount', type: 'text' },
        { id: 'RejectionReason', label: 'Reason for Rejection', type: 'text' },
        { id: 'ContactPerson', label: 'Contact Person', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Funding Request Letter': {
      template: `
        Subject: Request for Financial Assistance

        Dear {ContactPerson},

        I am writing to request financial assistance for {PurposeOfAssistance}. 
        The details of my request are as follows:

        - **Assistance Amount Requested**: {AssistanceAmount}
        - **Purpose of Assistance**: {PurposeOfAssistance}
        - **Application Date**: {ApplicationDate}

        I appreciate your consideration of my request and look forward to your response.

        Sincerely,
        {RecipientName}
        {RecipientAddress}
        {City}, {State} {ZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'ContactPerson', label: 'Contact Person', type: 'text' },
        { id: 'AssistanceAmount', label: 'Assistance Amount Requested', type: 'text' },
        { id: 'PurposeOfAssistance', label: 'Purpose of Assistance', type: 'text' },
        { id: 'ApplicationDate', label: 'Application Date', type: 'date' },
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'RecipientAddress', label: 'Recipient Address', type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIPCode', label: 'ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Assistance Follow-Up Letter': {
      template: `
        Subject: Follow-Up on Financial Assistance Request

        Dear {ContactPerson},

        I am writing to follow up on my recent request for financial assistance dated {ApplicationDate}.
         I would appreciate an update on the status of my application and any 
         additional information required.

        Thank you for your attention to this matter.

        Sincerely,
        {RecipientName}
        {RecipientAddress}
        {City}, {State} {ZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'ContactPerson', label: 'Contact Person', type: 'text' },
        { id: 'ApplicationDate', label: 'Application Date', type: 'date' },
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'RecipientAddress', label: 'Recipient Address', type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIPCode', label: 'ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Financial Aid Disbursement Letter': {
      template: `
        Subject: Financial Aid Disbursement Notification

        Dear {RecipientName},

        We are pleased to inform you that financial aid in the amount of {GrantAmount} has 
        been disbursed to you. The details are as follows:

        - **Disbursement Amount**: {GrantAmount}
        - **Purpose**: {GrantPurpose}
        - **Disbursement Date**: {DisbursementDate}
        - **Report Due Date**: {ReportDueDate}

        Please ensure that you submit a report detailing the use of the funds by the due date.

        Sincerely,
        {ContactPerson}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'GrantAmount', label: 'Grant Amount', type: 'text' },
        { id: 'GrantPurpose', label: 'Purpose of Grant', type: 'text' },
        { id: 'DisbursementDate', label: 'Disbursement Date', type: 'date' },
        { id: 'ReportDueDate', label: 'Report Due Date', type: 'date' },
        { id: 'ContactPerson', label: 'Contact Person', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Financial Aid Renewal Letter': {
      template: `
        Subject: Financial Aid Renewal Request

        Dear {ContactPerson},

        I am writing to request the renewal of my financial aid for the period 
        starting {RenewalStartDate}. Below are the details of my previous funding and 
        request for renewal:

        - **Previous Funding Amount**: {PreviousFundingAmount}
        - **Requested Renewal Amount**: {RenewalAmount}
        - **Renewal Start Date**: {RenewalStartDate}

        I look forward to your response.

        Sincerely,
        {RecipientName}
        {RecipientAddress}
        {City}, {State} {ZIPCode}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'ContactPerson', label: 'Contact Person', type: 'text' },
        { id: 'PreviousFundingAmount', label: 'Previous Funding Amount', type: 'text' },
        { id: 'RenewalAmount', label: 'Requested Renewal Amount', type: 'text' },
        { id: 'RenewalStartDate', label: 'Renewal Start Date', type: 'date' },
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'RecipientAddress', label: 'Recipient Address', type: 'text' },
        { id: 'City', label: 'City', type: 'text' },
        { id: 'State', label: 'State', type: 'text' },
        { id: 'ZIPCode', label: 'ZIP Code', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    },
    'Assistance Confirmation Letter': {
      template: `
        Subject: Confirmation of Financial Assistance

        Dear {RecipientName},

        This letter serves as confirmation that financial assistance in the amount 
        of {AssistanceAmount} has been approved and processed. The details are:

        - **Assistance Amount**: {AssistanceAmount}
        - **Purpose**: {PurposeOfAssistance}
        - **Effective Date**: {EffectiveDate}

        Should you have any questions or need further assistance, 
        please do not hesitate to contact us.

        Sincerely,
        {ContactPerson}
        {ContactNumber}
        {Email}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'AssistanceAmount', label: 'Assistance Amount', type: 'text' },
        { id: 'PurposeOfAssistance', label: 'Purpose of Assistance', type: 'text' },
        { id: 'EffectiveDate', label: 'Effective Date', type: 'date' },
        { id: 'ContactPerson', label: 'Contact Person', type: 'text' },
        { id: 'ContactNumber', label: 'Contact Number', type: 'text' },
        { id: 'Email', label: 'Email', type: 'email' }
      ]
    }

      },
      
      "Security Letters":{
        'Security Incident Report': {
      template: `
        Subject: Security Incident Report

        Dear {RecipientName},

        This letter is to formally report a security incident that occurred on {IncidentDate}. 
        The incident details are as follows:

        - **Incident Description**: {IncidentDescription}
        - **Type of Security Breach**: {SecurityBreachType}
        - **Actions Taken**: {ResolutionActions}
        - **Preventive Measures Implemented**: {PreventiveMeasures}

        Please contact us if further clarification is needed.

        Sincerely,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'IncidentDate', label: 'Incident Date', type: 'date' },
        { id: 'IncidentDescription', label: 'Incident Description', type: 'text' },
        { id: 'SecurityBreachType', label: 'Type of Security Breach', type: 'text' },
        { id: 'ResolutionActions', label: 'Actions Taken', type: 'text' },
        { id: 'PreventiveMeasures', label: 'Preventive Measures Implemented', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' }
      ]
    },
    'Access Authorization Letter': {
      template: `
        Subject: Access Authorization Confirmation

        Dear {RecipientName},

        We are pleased to inform you that you have been granted access to the 
        following secure area(s) and/or information:

        - **Security Clearance Level**: {SecurityClearanceLevel}
        - **Access Granted On**: {AccessGrantedDate}
        - **Purpose of Access**: {RequestReason}

        Please ensure that you adhere to all security protocols and guidelines. 
        For further details, contact our security office.

        Sincerely,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'SecurityClearanceLevel', label: 'Security Clearance Level', type: 'text' },
        { id: 'AccessGrantedDate', label: 'Access Granted On', type: 'date' },
        { id: 'RequestReason', label: 'Purpose of Access', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' }
      ]
    },
    'Security Breach Notification': {
      template: `
        Subject: Notification of Security Breach

        Dear {RecipientName},

        We regret to inform you of a security breach that occurred on {IncidentDate}.
         The nature of the breach involved {SecurityBreachType}.
          Immediate actions have been taken to contain the situation.

        - **Incident Description**: {IncidentDescription}
        - **Actions Taken**: {ResolutionActions}
        - **Further Preventive Measures**: {PreventiveMeasures}

        We advise you to take the necessary precautions to protect your information. 
        For any concerns, please contact our security team.

        Sincerely,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'IncidentDate', label: 'Incident Date', type: 'date' },
        { id: 'SecurityBreachType', label: 'Type of Security Breach', type: 'text' },
        { id: 'IncidentDescription', label: 'Incident Description', type: 'text' },
        { id: 'ResolutionActions', label: 'Actions Taken', type: 'text' },
        { id: 'PreventiveMeasures', label: 'Further Preventive Measures', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' }
      ]
    },
    'Access Revocation Letter': {
      template: `
        Subject: Access Revocation Notification

        Dear {RecipientName},

        This letter is to formally notify you that your access to the secure area(s) 
        and/or information has been revoked as of {AccessRevocationDate}. 
        This decision was made due to {ReasonForRevocation}.

        Please return any security badges or materials immediately. 
        For further information, contact our security office.

        Sincerely,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'AccessRevocationDate', label: 'Access Revocation Date', type: 'date' },
        { id: 'ReasonForRevocation', label: 'Reason for Revocation', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' }
      ]
    },
    'Confidentiality Agreement': {
      template: `
        Subject: Confidentiality Agreement

        Dear {RecipientName},

        This letter serves as a confidentiality agreement 
        between {SenderName} and {RecipientName}. 
        You are required to keep all information classified as confidential 
        under strict confidence.

        - **Confidential Information**: {ConfidentialInformation}
        - **Agreement Effective Date**: {EffectiveDate}

        By signing this agreement, you acknowledge and agree to adhere 
        to the confidentiality terms.

        Sincerely,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'ConfidentialInformation', label: 'Confidential Information', type: 'text' },
        { id: 'EffectiveDate', label: 'Agreement Effective Date', type: 'date' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' }
      ]
    },
    'Security Policy Implementation': {
      template: `
        Subject: Security Policy Implementation Notification

        Dear {RecipientName},

        We are implementing a new security policy effective from {PolicyImplementationDate}.
         This policy is designed to enhance our security measures and protect our data.

        - **Security Policy Overview**: {SecurityPolicy}
        - **Policy Effective Date**: {PolicyImplementationDate}

        Please review the policy and adhere to all guidelines. 
        For further information, contact our security office.

        Sincerely,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'SecurityPolicy', label: 'Security Policy Overview', type: 'text' },
        { id: 'PolicyImplementationDate', label: 'Policy Effective Date', type: 'date' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' }
      ]
    },
    'Background Check Confirmation': {
      template: `
        Subject: Background Check Confirmation

        Dear {RecipientName},

        This letter confirms that a background check has been successfully completed
         for {RecipientName}. The status of the background check is as follows:

        - **Background Check Status**: {BackgroundCheckStatus}
        - **Security Clearance Level**: {SecurityClearanceLevel}

        Please maintain the confidentiality and security of this information. 
        For any further inquiries, contact our security office.

        Sincerely,
        {SenderName}
      `,
      fields: [
        { id: 'RecipientName', label: 'Recipient Name', type: 'text' },
        { id: 'BackgroundCheckStatus', label: 'Background Check Status', type: 'text' },
        { id: 'SecurityClearanceLevel', label: 'Security Clearance Level', type: 'text' },
        { id: 'SenderName', label: 'Sender Name', type: 'text' }
      ]
    }
      },

      "Investment and Savings":{
         "Investment Portfolio Update": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    We are pleased to provide you with an update on your investment portfolio 
    with {YourCompany}. As of {CurrentDate}, your portfolio is valued 
    at {PortfolioValue} with the following key changes:

    - {InvestmentChange1}
    - {InvestmentChange2}
    - {InvestmentChange3}

    We recommend {InvestmentAdvice} based on current market trends. 
    For more detailed information, 
    please refer to the attached statement or contact your financial advisor.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "PortfolioValue", "label": "Portfolio Value", "type": "text" },
      { "id": "InvestmentChange1", "label": "Investment Change 1", "type": "text" },
      { "id": "InvestmentChange2", "label": "Investment Change 2", "type": "text" },
      { "id": "InvestmentChange3", "label": "Investment Change 3", "type": "text" },
      { "id": "InvestmentAdvice", "label": "Investment Advice", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Savings Account Interest Rate Change Notice": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    We are writing to inform you about an upcoming change in the  
    interest rate for your savings account with {YourCompany}. 
    Effective {EffectiveDate}, the interest rate will be adjusted to {NewInterestRate}%.

    This change is due to {ReasonForChange} and will apply to all savings accounts. 
    We encourage you to review your account 
    details and consider your options. If you have any questions or need further assistance, 
    please contact our customer service team.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "EffectiveDate", "label": "Effective Date", "type": "date" },
      { "id": "NewInterestRate", "label": "New Interest Rate", "type": "text" },
      { "id": "ReasonForChange", "label": "Reason for Change", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Investment Account Statement": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    Please find enclosed your investment account statement for the period {StartDate} 
    to {EndDate}. 
    The statement includes details of all transactions, current holdings, 
    and the overall performance of your investments.

    Highlights of your portfolio for this period include:
    - Total Contributions: {TotalContributions}
    - Total Withdrawals: {TotalWithdrawals}
    - Current Portfolio Value: {CurrentPortfolioValue}

    For any queries or more detailed information, feel free to contact us.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "StartDate", "label": "Start Date", "type": "date" },
      { "id": "EndDate", "label": "End Date", "type": "date" },
      { "id": "TotalContributions", "label": "Total Contributions", "type": "text" },
      { "id": "TotalWithdrawals", "label": "Total Withdrawals", "type": "text" },
      { "id": "CurrentPortfolioValue", "label": "Current Portfolio Value", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Fixed Deposit Maturity Notification": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    We are pleased to inform you that your Fixed Deposit account with {YourCompany}, 
    holding the account number {AccountNumber}, is due for maturity on {MaturityDate}. 
    The principal amount of {PrincipalAmount} along with the accumulated interest of 
    {InterestAmount} will be credited to your account.

    You have the option to reinvest the matured amount into a new fixed deposit 
    or transfer it to your savings account. Please let us know your preference by 
    contacting us before {ResponseDate}. We appreciate your trust in our services.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "AccountNumber", "label": "Account Number", "type": "text" },
      { "id": "MaturityDate", "label": "Maturity Date", "type": "date" },
      { "id": "PrincipalAmount", "label": "Principal Amount", "type": "text" },
      { "id": "InterestAmount", "label": "Interest Amount", "type": "text" },
      { "id": "ResponseDate", "label": "Response Date", "type": "date" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Investment Risk Assessment Report": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    We have completed a comprehensive risk assessment for your investment 
    portfolio as of {AssessmentDate}. 
    The key findings of the assessment are as follows:

    - Risk Level: {RiskLevel}
    - Primary Risk Factors: {RiskFactors}
    - Recommended Changes: {RecommendedChanges}

    We suggest considering these factors and making adjustments to 
    align with your risk tolerance. 
    Please contact your financial advisor for a detailed discussion 
    on potential strategies.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "AssessmentDate", "label": "Assessment Date", "type": "date" },
      { "id": "RiskLevel", "label": "Risk Level", "type": "text" },
      { "id": "RiskFactors", "label": "Risk Factors", "type": "text" },
      { "id": "RecommendedChanges", "label": "Recommended Changes", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Investment Withdrawal Confirmation": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    This letter confirms the successful withdrawal of {WithdrawalAmount} from 
    your investment account on {WithdrawalDate}. 
    The transaction ID for this withdrawal is {TransactionID}.

    If you did not initiate this withdrawal, please contact our customer service 
    immediately at {CustomerServiceContact}. 
    Otherwise, no further action is required.

    Thank you for investing with {YourCompany}.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "WithdrawalAmount", "label": "Withdrawal Amount", "type": "text" },
      { "id": "WithdrawalDate", "label": "Withdrawal Date", "type": "date" },
      { "id": "TransactionID", "label": "Transaction ID", "type": "text" },
      { "id": "CustomerServiceContact", "label": "Customer Service Contact", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Savings Plan Recommendation": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    Based on your current financial situation and savings goals, 
    we have identified several savings plans 
    that may be beneficial to you. We recommend considering 
    the following options:

    1. {SavingsPlanOption1}: {Description1}
    2. {SavingsPlanOption2}: {Description2}
    3. {SavingsPlanOption3}: {Description3}

    Each of these plans offers unique benefits tailored to different 
    financial objectives. 
    Please review the attached details and let us know if you would like to 
    discuss these options further.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "SavingsPlanOption1", "label": "Savings Plan Option 1", "type": "text" },
      { "id": "Description1", "label": "Description 1", "type": "text" },
      { "id": "SavingsPlanOption2", "label": "Savings Plan Option 2", "type": "text" },
      { "id": "Description2", "label": "Description 2", "type": "text" },
      { "id": "SavingsPlanOption3", "label": "Savings Plan Option 3", "type": "text" },
      { "id": "Description3", "label": "Description 3", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  }
      },

      "Customer Service":{
        "General Inquiry Response": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    Thank you for reaching out to {YourCompany} with your inquiry. 
    We appreciate your interest and 
    would like to provide you with the information you requested.

    Regarding your question about {InquirySubject}, we would like to 
    inform you that {ResponseContent}. 
    If you have any further questions or need additional information, 
    please do not hesitate to contact us.

    We value your engagement and look forward to assisting you further.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "InquirySubject", "label": "Inquiry Subject", "type": "text" },
      { "id": "ResponseContent", "label": "Response Content", "type": "textarea" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Complaint Acknowledgment": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    We have received your complaint regarding {ComplaintSubject} and 
    want to acknowledge your feedback. 
    We sincerely apologize for any inconvenience this may 
    have caused you.

    Our team is currently reviewing the issue, and we will take appropriate 
    steps to address your concerns. 
    You can expect a detailed response from us within {ResolutionTimeFrame}. 
    In the meantime, 
    if you have any additional information or need further assistance, 
    please feel free to contact us.

    We value your feedback and appreciate the opportunity to 
    improve our services.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ComplaintSubject", "label": "Complaint Subject", "type": "text" },
      { "id": "ResolutionTimeFrame", "label": "Resolution Time Frame", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Feedback Response": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    Thank you for your recent feedback regarding {FeedbackTopic}. 
    We greatly appreciate the time you took to share your 
    thoughts and experiences with us.

    Your feedback is valuable as it helps us understand our customers'
     needs and expectations. 
    We will review your comments carefully and use them to improve 
    our services and products. 
    If there are any specific actions we plan to take as a result of 
    your feedback, 
    we will inform you accordingly.

    If you have any further suggestions or need assistance, 
    please feel free to reach out.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "FeedbackTopic", "label": "Feedback Topic", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Service Improvement Notification": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    We are pleased to inform you about recent improvements 
    we have made to our services. 
    As of {ImprovementDate}, we have implemented the 
    following changes:

    - {Improvement1}
    - {Improvement2}
    - {Improvement3}

    These enhancements are part of our ongoing commitment to providing 
    you with the best possible experience. 
    We believe these changes will significantly improve your 
    satisfaction and convenience.

    If you have any questions or would like further details, 
    please do not hesitate to contact us.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ImprovementDate", "label": "Improvement Date", "type": "date" },
      { "id": "Improvement1", "label": "Improvement Detail 1", "type": "textarea" },
      { "id": "Improvement2", "label": "Improvement Detail 2", "type": "textarea" },
      { "id": "Improvement3", "label": "Improvement Detail 3", "type": "textarea" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Customer Appreciation Letter": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    We want to take a moment to express our sincere appreciation for your continued 
    support and loyalty to {YourCompany}. 
    As a valued customer, your satisfaction is our top priority, and we are grateful 
    for the trust you place in us.

    Your feedback and patronage have been instrumental in helping us grow and 
    improve our services. 
    We are committed to providing you with the best possible experience and look 
    forward to serving you in the future.

    Thank you once again for choosing {YourCompany}. 
    If there is anything we can do to assist you, 
    please do not hesitate to reach out.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Service Interruption Notification": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    We regret to inform you that there will be a temporary interruption in our services 
    on {InterruptionDate} 
    due to {ReasonForInterruption}. The interruption will begin at {StartTime} and 
    is expected to last until {EndTime}.

    We apologize for any inconvenience this may cause and appreciate your understanding. 
    Our team will work diligently to minimize the impact and restore services as quickly                                                                                                                                                                                                                                                                                                                         
    as possible.

    If you have any questions or require further assistance, 
    please do not hesitate to contact us.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "InterruptionDate", "label": "Interruption Date", "type": "date" },
      { "id": "ReasonForInterruption", "label": "Reason for Interruption", "type": "textarea" },
      { "id": "StartTime", "label": "Start Time", "type": "time" },
      { "id": "EndTime", "label": "End Time", "type": "time" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Account Closure Confirmation": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    This letter serves as confirmation of the closure of your account with {YourCompany}. 
    The closure was processed on {ClosureDate} at your request.

    We appreciate the time you have spent with us and hope that you had a positive experience. 
    Should you decide to return, we would be happy to assist you with any future needs.

    If you have any questions or require further details regarding your account closure, 
    please do not hesitate to contact us.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ClosureDate", "label": "Closure Date", "type": "date" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  }
      },

      "Legal Notices":{
        "Cease and Desist Letter": {
          template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}
      
          {RecipientName}
          {RecipientAddress}
          {City}, {State}, {ZIPCode}
      
          Dear {RecipientName},
      
          RE: Cease and Desist Notice
      
          This letter serves as a formal notice demanding that you immediately 
          cease and desist from {DescribeUnlawfulActivity} 
          which is infringing upon our rights as outlined 
          in {RelevantLawOrContract}. 
      
          Failure to comply with this request within {CompliancePeriod} days 
          may result in legal action to protect our rights, 
          including seeking damages and injunctive relief.
      
          We request that you confirm in writing within {ConfirmationPeriod} days 
          of receipt of this letter that you have 
          ceased all such activities.
      
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
            { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
            { "id": "DescribeUnlawfulActivity", "label": "Describe Unlawful Activity", "type": "textarea" },
            { "id": "RelevantLawOrContract", "label": "Relevant Law or Contract", "type": "text" },
            { "id": "CompliancePeriod", "label": "Compliance Period (days)", "type": "number" },
            { "id": "ConfirmationPeriod", "label": "Confirmation Period (days)", "type": "number" },
            { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
            { "id": "YourEmail", "label": "Your Email", "type": "email" }
          ]
        },
        "Demand for Payment": {
          template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}
      
          {RecipientName}
          {RecipientAddress}
          {City}, {State}, {ZIPCode}
      
          Dear {RecipientName},
      
          RE: Demand for Payment
      
          This letter serves as a formal demand for payment of the outstanding amount 
          of {AmountDue}, which is overdue 
          for invoice number {InvoiceNumber} dated {InvoiceDate}.
      
          Please remit payment in full within {PaymentPeriod} days from the date of 
          this letter to avoid further action. 
          Failure to comply may result in legal action, including but not limited to,
           the initiation of collection procedures.
      
          We appreciate your prompt attention to this matter.
      
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
            { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
            { "id": "AmountDue", "label": "Amount Due", "type": "text" },
            { "id": "InvoiceNumber", "label": "Invoice Number", "type": "text" },
            { "id": "InvoiceDate", "label": "Invoice Date", "type": "date" },
            { "id": "PaymentPeriod", "label": "Payment Period (days)", "type": "number" },
            { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
            { "id": "YourEmail", "label": "Your Email", "type": "email" }
          ]
        },
        "Notice of Breach of Contract": {
          template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}
      
          {RecipientName}
          {RecipientAddress}
          {City}, {State}, {ZIPCode}
      
          Dear {RecipientName},
      
          RE: Notice of Breach of Contract
      
          This letter serves as a formal notice of breach of contract pursuant 
          to the agreement dated {ContractDate} 
          between {YourCompany} and {RecipientCompany}. 
      
          Specifically, the breach involves {DescribeBreach}. We request 
          that you remedy this breach within {CurePeriod} 
          days from the date of this notice. Failure to do so may result 
          in further legal action to enforce the terms 
          of the contract.
      
          We hope to resolve this matter amicably and look forward to your
           prompt response.
      
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
            { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
            { "id": "ContractDate", "label": "Contract Date", "type": "date" },
            { "id": "DescribeBreach", "label": "Describe Breach", "type": "textarea" },
            { "id": "CurePeriod", "label": "Cure Period (days)", "type": "number" },
            { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
            { "id": "YourEmail", "label": "Your Email", "type": "email" }
          ]
        },
        "Intellectual Property Rights Notice": {
          template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}
      
          {RecipientName}
          {RecipientAddress}
          {City}, {State}, {ZIPCode}
      
          Dear {RecipientName},
      
          RE: Intellectual Property Rights Notice
      
          This letter is to inform you that the use of {DescribeInfringingMaterial}
           on your website or in your materials 
          constitutes an infringement of our intellectual property rights as 
          protected under {RelevantIntellectualPropertyLaw}.
      
          We request that you cease and desist from any further use of this 
          material and remove it from all platforms 
          within {RemovalPeriod} days. Failure to comply may result in legal 
          action to enforce our rights.
      
          We appreciate your immediate attention to this matter.
      
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
            { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
            { "id": "DescribeInfringingMaterial", "label": "Describe Infringing Material", "type": "textarea" },
            { "id": "RelevantIntellectualPropertyLaw", "label": "Relevant Intellectual Property Law", "type": "text" },
            { "id": "RemovalPeriod", "label": "Removal Period (days)", "type": "number" },
            { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
            { "id": "YourEmail", "label": "Your Email", "type": "email" }
          ]
        },
        "Termination of Lease": {
          template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}
      
          {TenantName}
          {TenantAddress}
          {City}, {State}, {ZIPCode}
      
          Dear {TenantName},
      
          RE: Termination of Lease
      
          This letter is to formally notify you of the termination of your lease agreement
           for the property located at 
          {PropertyAddress}. The lease termination will be effective on {TerminationDate}.
      
          Please ensure that you vacate the premises by the termination date and return
           all keys and access devices. 
          A final inspection will be conducted on {InspectionDate} to assess the 
          condition of the property.
      
          If you have any questions or need further information, 
          please contact us.
      
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
            { "id": "TenantName", "label": "Tenant's Name", "type": "text" },
            { "id": "TenantAddress", "label": "Tenant's Address", "type": "text" },
            { "id": "PropertyAddress", "label": "Property Address", "type": "text" },
            { "id": "TerminationDate", "label": "Termination Date", "type": "date" },
            { "id": "InspectionDate", "label": "Inspection Date", "type": "date" },
            { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
            { "id": "YourEmail", "label": "Your Email", "type": "email" }
          ]
        },
        "Eviction Notice": {
          template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}
      
          {TenantName}
          {TenantAddress}
          {City}, {State}, {ZIPCode}
      
          Dear {TenantName},
      
          RE: Eviction Notice
      
          This letter serves as a formal notice of eviction from the property 
          located at {PropertyAddress}. 
          The eviction will be effective on {EvictionDate} due 
          to {ReasonForEviction}.
      
          Please ensure that you vacate the property by the specified date. 
          Failure to do so may result in legal 
          proceedings to enforce this eviction notice.
      
          We appreciate your cooperation in this matter.
      
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
            { "id": "TenantName", "label": "Tenant's Name", "type": "text" },
            { "id": "TenantAddress", "label": "Tenant's Address", "type": "text" },
            { "id": "PropertyAddress", "label": "Property Address", "type": "text" },
            { "id": "EvictionDate", "label": "Eviction Date", "type": "date" },
            { "id": "ReasonForEviction", "label": "Reason for Eviction", "type": "textarea" },
            { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
            { "id": "YourEmail", "label": "Your Email", "type": "email" }
          ]
        },
        "Notice of Intent to Sue": {
          template: `
          {YourName}
          {YourPosition}
          {YourCompany}
          {YourAddress}
          {City}, {State}, {ZIPCode}
          {CurrentDate}
      
          {RecipientName}
          {RecipientAddress}
          {City}, {State}, {ZIPCode}
      
          Dear {RecipientName},
      
          RE: Notice of Intent to Sue
      
          This letter serves as a formal notice of our intention to pursue legal action
           against you for {DescribeIssue}, 
          which is in violation of {RelevantLawOrContract}.
      
          We urge you to take immediate steps to address this issue and resolve
           the matter within {ResolutionPeriod} 
          days. Failure to do so may result in legal proceedings being initiated 
          to seek damages and other remedies.
      
          We hope to resolve this matter without further legal action and await
           your prompt response.
      
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
            { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
            { "id": "DescribeIssue", "label": "Describe Issue", "type": "textarea" },
            { "id": "RelevantLawOrContract", "label": "Relevant Law or Contract", "type": "text" },
            { "id": "ResolutionPeriod", "label": "Resolution Period (days)", "type": "number" },
            { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
            { "id": "YourEmail", "label": "Your Email", "type": "email" }
          ]
        },
      },

      "Demand Letters":{
         "Demand for Payment": {
    template: `
{YourName}
{YourPosition}
{YourCompany}
{YourAddress}
{City}, {State}, {ZIPCode}
{CurrentDate}

{RecipientName}
{RecipientAddress}
{City}, {State}, {ZIPCode}

Dear {RecipientName},

RE: Demand for Payment

We are writing to demand immediate payment of the outstanding balance on your account with us. As of {CurrentDate},
 the total amount due is {AmountDue}. This payment is overdue by {NumberOfDays} days and was originally 
 due on {OriginalDueDate}.

Please remit payment in full within the next {PaymentPeriod} days to avoid further action. 
Failure to make payment within this period will result in additional interest charges and potential 
legal action to recover the amount owed.

For payment, please use the following details:
- Amount Due: {AmountDue}
- Payment Method: {PaymentMethod}
- Payment Instructions: {PaymentInstructions}

If you have already sent the payment, 
please disregard this notice. Should you need to discuss this matter,
 contact us immediately.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "AmountDue", "label": "Amount Due", "type": "text" },
      { "id": "NumberOfDays", "label": "Number of Days Overdue", "type": "number" },
      { "id": "OriginalDueDate", "label": "Original Due Date", "type": "date" },
      { "id": "PaymentPeriod", "label": "Payment Period", "type": "number" },
      { "id": "PaymentMethod", "label": "Payment Method", "type": "text" },
      { "id": "PaymentInstructions", "label": "Payment Instructions", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Demand for Lease Payment": {
    template: `
{YourName}
{YourPosition}
{YourCompany}
{YourAddress}
{City}, {State}, {ZIPCode}
{CurrentDate}

{TenantName}
{TenantAddress}
{City}, {State}, {ZIPCode}

Dear {TenantName},

RE: Demand for Lease Payment

This letter serves as a formal demand for payment of the overdue 
lease amount for the property located at {PropertyAddress}.
 As of {CurrentDate}, the total overdue amount is {AmountDue},
  which was due on {OriginalDueDate}.

You are required to make payment immediately to avoid further 
actions such as legal proceedings or eviction. 
The total amount must be paid within {PaymentPeriod} days.

For payment, please use the following details:
- Amount Due: {AmountDue}
- Payment Instructions: {PaymentInstructions}

If payment has already been made, please disregard this notice. 
Please contact us if you need to discuss this matter further.

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
      { "id": "TenantName", "label": "Tenant's Name", "type": "text" },
      { "id": "TenantAddress", "label": "Tenant's Address", "type": "text" },
      { "id": "PropertyAddress", "label": "Property Address", "type": "text" },
      { "id": "AmountDue", "label": "Amount Due", "type": "text" },
      { "id": "OriginalDueDate", "label": "Original Due Date", "type": "date" },
      { "id": "PaymentPeriod", "label": "Payment Period", "type": "number" },
      { "id": "PaymentInstructions", "label": "Payment Instructions", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Demand for Refund": {
    template: `
{YourName}
{YourPosition}
{YourCompany}
{YourAddress}
{City}, {State}, {ZIPCode}
{CurrentDate}

{RecipientName}
{RecipientAddress}
{City}, {State}, {ZIPCode}

Dear {RecipientName},

RE: Demand for Refund

We are writing to formally request a refund of {AmountDue} for {ReasonForRefund}. 
This refund is due to {DetailedExplanationOfIssue} and was originally 
requested on {RequestDate}.

Please process this refund within the next {RefundPeriod} days to avoid 
further escalation. Failure to issue the refund promptly will result in 
legal action to recover the amount due.

For any questions or concerns regarding this request,
 please contact us immediately.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "AmountDue", "label": "Amount Due", "type": "text" },
      { "id": "ReasonForRefund", "label": "Reason for Refund", "type": "text" },
      { "id": "DetailedExplanationOfIssue", "label": "Detailed Explanation of Issue", "type": "text" },
      { "id": "RequestDate", "label": "Request Date", "type": "date" },
      { "id": "RefundPeriod", "label": "Refund Period", "type": "number" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Demand for Contract Performance": {
    template: `
{YourName}
{YourPosition}
{YourCompany}
{YourAddress}
{City}, {State}, {ZIPCode}
{CurrentDate}

{RecipientName}
{RecipientAddress}
{City}, {State}, {ZIPCode}

Dear {RecipientName},

RE: Demand for Contract Performance

We are writing to demand the performance of the obligations specified 
in our contract dated {ContractDate} for {ContractPurpose}. 
As of {CurrentDate}, you have failed to meet the following 
obligations: {ListObligationsNotMet}.

Please remedy this situation within {PerformancePeriod} days to avoid 
further legal action. 
The failure to perform as agreed upon will result in legal action to 
enforce the contract and seek damages.

If you have any questions or require clarification, 
please contact us immediately.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ContractDate", "label": "Contract Date", "type": "date" },
      { "id": "ContractPurpose", "label": "Contract Purpose", "type": "text" },
      { "id": "ListObligationsNotMet", "label": "List of Obligations Not Met", "type": "text" },
      { "id": "PerformancePeriod", "label": "Performance Period", "type": "number" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Demand for Service Completion": {
    template: `
{YourName}
{YourPosition}
{YourCompany}
{YourAddress}
{City}, {State}, {ZIPCode}
{CurrentDate}

{ServiceProviderName}
{ServiceProviderAddress}
{City}, {State}, {ZIPCode}

Dear {ServiceProviderName},

RE: Demand for Service Completion

This letter is to formally demand the completion of the services outlined 
in our agreement dated {AgreementDate} for {ServiceDescription}. 
As of {CurrentDate}, the services have not been completed as agreed upon.

Please complete the services within {CompletionPeriod} days to avoid 
further actions. Failure to do so will result in the pursuit of legal 
remedies to enforce the agreement and seek damages for non-performance.

Please contact us if you need additional information or clarification.

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
      { "id": "ServiceProviderName", "label": "Service Provider's Name", "type": "text" },
      { "id": "ServiceProviderAddress", "label": "Service Provider's Address", "type": "text" },
      { "id": "AgreementDate", "label": "Agreement Date", "type": "date" },
      { "id": "ServiceDescription", "label": "Service Description", "type": "text" },
      { "id": "CompletionPeriod", "label": "Completion Period", "type": "number" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Demand for Contract Breach": {
    template: `
{YourName}
{YourPosition}
{YourCompany}
{YourAddress}
{City}, {State}, {ZIPCode}
{CurrentDate}

{RecipientName}
{RecipientAddress}
{City}, {State}, {ZIPCode}

Dear {RecipientName},

RE: Demand for Remedy of Contract Breach

We are writing to address a breach of contract concerning the agreement 
dated {ContractDate} for {ContractPurpose}. 
The breach involves {DescriptionOfBreach}, which occurred on {DateOfBreach}.

You are required to remedy this breach within {RemedyPeriod} days from the 
date of this letter. Failure to do so will result in legal action to enforce 
the contract and recover any damages.

If you have any questions or wish to discuss this matter,
 please contact us as soon as possible.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ContractDate", "label": "Contract Date", "type": "date" },
      { "id": "ContractPurpose", "label": "Contract Purpose", "type": "text" },
      { "id": "DescriptionOfBreach", "label": "Description of Breach", "type": "text" },
      { "id": "DateOfBreach", "label": "Date of Breach", "type": "date" },
      { "id": "RemedyPeriod", "label": "Remedy Period", "type": "number" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Demand for Non-Disclosure Breach": {
    template: `
{YourName}
{YourPosition}
{YourCompany}
{YourAddress}
{City}, {State}, {ZIPCode}
{CurrentDate}

{RecipientName}
{RecipientAddress}
{City}, {State}, {ZIPCode}

Dear {RecipientName},

RE: Demand for Remedy of Non-Disclosure Agreement Breach

We are writing to address a breach of the Non-Disclosure Agreement 
dated {NDAStartDate}, concerning {DescriptionOfConfidentialInformation}.
 The breach occurred on {DateOfBreach}.

You are required to cease all use and disclosure of the confidential information
 and remedy this breach within {RemedyPeriod} days. 
 Failure to comply will result in legal action to enforce the NDA and seek damages.

If you need to discuss this matter or have any questions,
 please contact us immediately.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "NDAStartDate", "label": "NDA Start Date", "type": "date" },
      { "id": "DescriptionOfConfidentialInformation", "label": "Description of Confidential Information", "type": "text" },
      { "id": "DateOfBreach", "label": "Date of Breach", "type": "date" },
      { "id": "RemedyPeriod", "label": "Remedy Period", "type": "number" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  }
      },

      "Legal Correspondence":{
        "Settlement Agreement": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    RE: Settlement Agreement for {CaseReference}

    This letter serves as a formal agreement to settle the dispute regarding {DisputeDetails}.
     The terms of the settlement are as follows:

    1. Settlement Term 1: {SettlementTerm1}
    2. Settlement Term 2: {SettlementTerm2}
    3. Settlement Term 3: {SettlementTerm3}

    Please respond by {ResponseDeadline}. Should you have any questions, 
    contact me at {YourContactNumber} or {YourEmail}.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "CaseReference", "label": "Case Reference", "type": "text" },
      { "id": "DisputeDetails", "label": "Dispute Details", "type": "text" },
      { "id": "SettlementTerm1", "label": "Settlement Term 1", "type": "text" },
      { "id": "SettlementTerm2", "label": "Settlement Term 2", "type": "text" },
      { "id": "SettlementTerm3", "label": "Settlement Term 3", "type": "text" },
      { "id": "ResponseDeadline", "label": "Response Deadline", "type": "date" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Legal Compliance Notice": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    RE: Compliance Notice for {ComplianceIssue}

    This letter serves as a formal notice regarding non-compliance with {ComplianceIssue}.
     We have identified {SpecificIssue} as not meeting the required standards.

    You are required to rectify this non-compliance by {ComplianceDeadline}.
     Failure to address this issue may result in further actions as 
     outlined in {RelevantRegulations}.

    Please acknowledge receipt of this notice and confirm your compliance plan.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ComplianceIssue", "label": "Compliance Issue", "type": "text" },
      { "id": "SpecificIssue", "label": "Specific Issue", "type": "text" },
      { "id": "ComplianceDeadline", "label": "Compliance Deadline", "type": "date" },
      { "id": "RelevantRegulations", "label": "Relevant Regulations", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Notice of Breach of Contract": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    RE: Notice of Breach of Contract

    We hereby notify you of a breach of contract concerning {ContractDetails}.
     The specific breach pertains to {SpecificBreach}.

    You are required to remedy this breach within {RemedyPeriod} days. 
    If you fail to take corrective action, we will seek legal remedies as 
    provided in the contract.

    Please address this matter urgently and confirm your actions.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ContractDetails", "label": "Contract Details", "type": "text" },
      { "id": "SpecificBreach", "label": "Specific Breach", "type": "text" },
      { "id": "RemedyPeriod", "label": "Remedy Period", "type": "number" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Legal Advice Request": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    RE: Request for Legal Advice on {Subject}

    I am seeking your legal expertise concerning {Subject}. Specifically,
     I require guidance on {SpecificLegalIssue} and the implications 
     of {RelatedDetails}.

    Please provide your advice and recommendations at your earliest convenience.
     Your assistance will be invaluable in helping us make informed decisions.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "Subject", "label": "Subject", "type": "text" },
      { "id": "SpecificLegalIssue", "label": "Specific Legal Issue", "type": "text" },
      { "id": "RelatedDetails", "label": "Related Details", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Contract Termination Letter": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    RE: Termination of Contract

    This letter is to formally notify you of the termination of our contract 
    dated {ContractDate}. The reason for this termination is {TerminationReason}.

    The termination will be effective from {TerminationEffectiveDate}.
     Please ensure that all outstanding obligations are fulfilled by this date.

    Should you have any questions or require further information, feel free to contact me.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ContractDate", "label": "Contract Date", "type": "date" },
      { "id": "TerminationReason", "label": "Termination Reason", "type": "text" },
      { "id": "TerminationEffectiveDate", "label": "Termination Effective Date", "type": "date" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Request for Proposal": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    RE: Request for Proposal

    We are seeking proposals for {ProjectDescription} and are inviting you to submit a 
    detailed proposal for consideration.
     The proposal should include {ProposalRequirements}.

    The deadline for submitting your proposal is {ProposalDeadline}. 
    For any inquiries, please contact me at {YourContactNumber} or {YourEmail}.

    We look forward to receiving your proposal.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ProjectDescription", "label": "Project Description", "type": "text" },
      { "id": "ProposalRequirements", "label": "Proposal Requirements", "type": "text" },
      { "id": "ProposalDeadline", "label": "Proposal Deadline", "type": "date" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  },
  "Customer Complaint Response": {
    template: `
    {YourName}
    {YourPosition}
    {YourCompany}
    {YourAddress}
    {City}, {State}, {ZIPCode}
    {CurrentDate}

    {RecipientName}
    {RecipientAddress}
    {City}, {State}, {ZIPCode}

    Dear {RecipientName},

    RE: Response to Your Complaint

    We have received your complaint dated {ComplaintDate} regarding {ComplaintDetails}.
     We sincerely apologize for any inconvenience caused.

    We have taken the following steps to address your concerns: {ActionTaken}. 

    Please feel free to contact me directly if you have further questions or 
    if the issue persists.

    Thank you for bringing this to our attention.

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
      { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
      { "id": "ComplaintDate", "label": "Complaint Date", "type": "date" },
      { "id": "ComplaintDetails", "label": "Complaint Details", "type": "text" },
      { "id": "ActionTaken", "label": "Action Taken", "type": "text" },
      { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
      { "id": "YourEmail", "label": "Your Email", "type": "email" }
    ]
  }
      },
      

      "Contract Letters": {
    "Settlement Agreement": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Settlement Agreement

      This letter serves as a formal agreement between {YourCompany} and {RecipientName}
       regarding the settlement of {SettlementIssue}.
        Both parties agree to the following terms:

      1. {Term1}
      2. {Term2}
      3. {Term3}

      The settlement amount of {SettlementAmount} will be paid by {PaymentDate}.
       This agreement resolves all claims and disputes related to {SettlementIssue}.

      Please sign below to confirm your acceptance of these terms.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "SettlementIssue", "label": "Settlement Issue", "type": "text" },
        { "id": "Term1", "label": "Term 1", "type": "text" },
        { "id": "Term2", "label": "Term 2", "type": "text" },
        { "id": "Term3", "label": "Term 3", "type": "text" },
        { "id": "SettlementAmount", "label": "Settlement Amount", "type": "text" },
        { "id": "PaymentDate", "label": "Payment Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Legal Compliance Notice": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Legal Compliance Notice

      This notice is to inform you of {YourCompany}'s legal obligation to comply
       with {SpecificRegulation} as required by {GoverningBody}.
        Our records indicate that {DescribeNonCompliance}.

      We request that you take the necessary actions to ensure compliance 
      by {ComplianceDeadline}. 
      Failure to do so may result in {PotentialConsequences}.

      If you have any questions or need further clarification, 
      please contact me at {YourContactNumber} or {YourEmail}.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "SpecificRegulation", "label": "Specific Regulation", "type": "text" },
        { "id": "GoverningBody", "label": "Governing Body", "type": "text" },
        { "id": "DescribeNonCompliance", "label": "Describe Non-Compliance", "type": "text" },
        { "id": "ComplianceDeadline", "label": "Compliance Deadline", "type": "date" },
        { "id": "PotentialConsequences", "label": "Potential Consequences", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Notice of Breach of Contract": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Notice of Breach of Contract

      We are writing to formally notify you of a breach of contract dated {ContractDate}.
       The specific breach involves {BreachDetails}.

      As per the terms of the contract, you are required to {RequiredAction}
       by {ActionDeadline}. Failure to address this breach may result in {Consequences}.

      Please contact me immediately to discuss this matter.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "ContractDate", "label": "Contract Date", "type": "date" },
        { "id": "BreachDetails", "label": "Breach Details", "type": "text" },
        { "id": "RequiredAction", "label": "Required Action", "type": "text" },
        { "id": "ActionDeadline", "label": "Action Deadline", "type": "date" },
        { "id": "Consequences", "label": "Consequences", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Legal Advice Request": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Request for Legal Advice

      I am seeking your legal advice on {LegalIssue}. Specifically, 
      I need guidance on {SpecificQuestions}.

      Please provide your advice and any necessary actions I should take.
       If a meeting or additional documentation is required, 
       kindly let me know.

      Thank you for your assistance.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "LegalIssue", "label": "Legal Issue", "type": "text" },
        { "id": "SpecificQuestions", "label": "Specific Questions", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Employment Contract": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {EmployeeName}
      {EmployeeAddress}
      {City}, {State}, {ZIPCode}

      Dear {EmployeeName},

      RE: Employment Contract

      We are pleased to offer you employment with {YourCompany} as 
      a {Position}. Your employment will commence on {StartDate} 
      under the following terms:

      1. **Salary**: {Salary}
      2. **Benefits**: {Benefits}
      3. **Work Hours**: {WorkHours}

      Please sign below to confirm your acceptance of this offer.

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
        { "id": "EmployeeName", "label": "Employee's Name", "type": "text" },
        { "id": "EmployeeAddress", "label": "Employee's Address", "type": "text" },
        { "id": "Position", "label": "Position", "type": "text" },
        { "id": "StartDate", "label": "Start Date", "type": "date" },
        { "id": "Salary", "label": "Salary", "type": "text" },
        { "id": "Benefits", "label": "Benefits", "type": "text" },
        { "id": "WorkHours", "label": "Work Hours", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Contract Renewal Notice": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Contract Renewal Notice

      This is to inform you that your current contract with {YourCompany},
       which is set to expire on {ContractExpiryDate}, is eligible for renewal. 
       We propose to extend the contract under the same terms and conditions 
       until {NewExpiryDate}.

      If you agree to this renewal, please sign and return the enclosed 
      document by {ResponseDeadline}.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "ContractExpiryDate", "label": "Contract Expiry Date", "type": "date" },
        { "id": "NewExpiryDate", "label": "New Expiry Date", "type": "date" },
        { "id": "ResponseDeadline", "label": "Response Deadline", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Contract Termination Notice": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Contract Termination Notice

      This letter is to notify you that {YourCompany} will be terminating the 
      contract dated {ContractDate} effective {TerminationDate}. 
      The decision to terminate is due to {ReasonForTermination}.

      Please arrange to return any property and settle any outstanding obligations 
      by {SettlementDate}.

      If you have any questions regarding this notice, 
      please contact me.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "ContractDate", "label": "Contract Date", "type": "date" },
        { "id": "TerminationDate", "label": "Termination Date", "type": "date" },
        { "id": "ReasonForTermination", "label": "Reason for Termination", "type": "text" },
        { "id": "SettlementDate", "label": "Settlement Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
  },

     "Dispute Resolution": {
    "Settlement Agreement": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Settlement Agreement

      This Settlement Agreement is made between {YourCompany} and {RecipientName}
       concerning the dispute arising from {DisputeDescription}. 

      The parties agree to the following terms:
      
      1. **Settlement Amount**: {SettlementAmount}
      2. **Payment Terms**: {PaymentTerms}
      3. **Release of Claims**: {ReleaseOfClaims}

      This agreement resolves all disputes related to {DisputeDescription} 
      and is final and binding.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "DisputeDescription", "label": "Dispute Description", "type": "text" },
        { "id": "SettlementAmount", "label": "Settlement Amount", "type": "text" },
        { "id": "PaymentTerms", "label": "Payment Terms", "type": "text" },
        { "id": "ReleaseOfClaims", "label": "Release of Claims", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Mediation Agreement": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Mediation Agreement

      This Mediation Agreement is made between {YourCompany} and {RecipientName}
       to resolve the dispute concerning {DisputeDescription} through mediation.

      The parties agree to the following terms:
      
      1. **Mediator**: {MediatorName}
      2. **Mediation Date**: {MediationDate}
      3. **Location**: {MediationLocation}

      The mediation will be conducted in good faith to resolve the issues
       stated above.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "DisputeDescription", "label": "Dispute Description", "type": "text" },
        { "id": "MediatorName", "label": "Mediator Name", "type": "text" },
        { "id": "MediationDate", "label": "Mediation Date", "type": "date" },
        { "id": "MediationLocation", "label": "Mediation Location", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Arbitration Notice": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Arbitration Notice

      This notice is to inform you that {YourCompany} intends to resolve the dispute 
      concerning {DisputeDescription} through arbitration.

      The following details are provided:
      
      1. **Arbitrator**: {ArbitratorName}
      2. **Arbitration Date**: {ArbitrationDate}
      3. **Arbitration Location**: {ArbitrationLocation}

      Please review the terms and confirm your agreement to 
      proceed with arbitration.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "DisputeDescription", "label": "Dispute Description", "type": "text" },
        { "id": "ArbitratorName", "label": "Arbitrator Name", "type": "text" },
        { "id": "ArbitrationDate", "label": "Arbitration Date", "type": "date" },
        { "id": "ArbitrationLocation", "label": "Arbitration Location", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Dispute Resolution Proposal": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Dispute Resolution Proposal

      This proposal outlines the proposed resolution for the dispute regarding
       {DisputeDescription}.

      The proposed resolution includes:
      
      1. **Proposed Solution**: {ProposedSolution}
      2. **Implementation Timeline**: {ImplementationTimeline}
      3. **Resolution Terms**: {ResolutionTerms}

      We believe this proposal will address the issues effectively and
       seek your agreement.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "DisputeDescription", "label": "Dispute Description", "type": "text" },
        { "id": "ProposedSolution", "label": "Proposed Solution", "type": "text" },
        { "id": "ImplementationTimeline", "label": "Implementation Timeline", "type": "text" },
        { "id": "ResolutionTerms", "label": "Resolution Terms", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Legal Demand for Resolution": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Legal Demand for Resolution

      This letter serves as a formal demand for the resolution of the dispute
       related to {DisputeDescription}. 

      The specific demands are:
      
      1. **Demand 1**: {Demand1}
      2. **Demand 2**: {Demand2}
      3. **Demand 3**: {Demand3}

      Please address these issues promptly to avoid further legal action.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "DisputeDescription", "label": "Dispute Description", "type": "text" },
        { "id": "Demand1", "label": "Demand 1", "type": "text" },
        { "id": "Demand2", "label": "Demand 2", "type": "text" },
        { "id": "Demand3", "label": "Demand 3", "type": "text" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Conflict Resolution Proposal": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Conflict Resolution Proposal

      This proposal is made to address the conflict arising from {ConflictDescription} 
      between {YourCompany} and {RecipientName}.

      Proposed resolution includes:
      
      1. **Resolution Method**: {ResolutionMethod}
      2. **Proposed Actions**: {ProposedActions}
      3. **Review Date**: {ReviewDate}

      We believe this proposal will resolve the conflict effectively and 
      request your feedback.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "ConflictDescription", "label": "Conflict Description", "type": "text" },
        { "id": "ResolutionMethod", "label": "Resolution Method", "type": "text" },
        { "id": "ProposedActions", "label": "Proposed Actions", "type": "text" },
        { "id": "ReviewDate", "label": "Review Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
    "Complaint Resolution Letter": {
      template: `
      {YourName}
      {YourPosition}
      {YourCompany}
      {YourAddress}
      {City}, {State}, {ZIPCode}
      {CurrentDate}

      {RecipientName}
      {RecipientAddress}
      {City}, {State}, {ZIPCode}

      Dear {RecipientName},

      RE: Complaint Resolution Letter

      This letter is to address the complaint regarding {ComplaintDescription}.

      The following actions will be taken:
      
      1. **Resolution Action 1**: {ResolutionAction1}
      2. **Resolution Action 2**: {ResolutionAction2}
      3. **Follow-Up Date**: {FollowUpDate}

      We appreciate your patience and cooperation in resolving this matter.

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
        { "id": "RecipientAddress", "label": "Recipient's Address", "type": "text" },
        { "id": "ComplaintDescription", "label": "Complaint Description", "type": "text" },
        { "id": "ResolutionAction1", "label": "Resolution Action 1", "type": "text" },
        { "id": "ResolutionAction2", "label": "Resolution Action 2", "type": "text" },
        { "id": "FollowUpDate", "label": "Follow-Up Date", "type": "date" },
        { "id": "YourContactNumber", "label": "Your Contact Number", "type": "text" },
        { "id": "YourEmail", "label": "Your Email", "type": "email" }
      ]
    },
  },
     
  "Regulatory Compliance Letters": {
    "Regulatory Compliance Acknowledgment": {
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

We acknowledge receipt of your notification regarding compliance with {SpecificRegulation}. 
We are pleased to confirm that our operations align with the requirements specified in {SpecificRegulation}, 
and we are committed to maintaining these standards.

If there are any further steps we need to take or documentation we need to provide, 
please let us know.

Sincerely,
{YourName}
{YourPosition}
{YourCompany}
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
        { "id": "SpecificRegulation", "label": "Specific Regulation", "type": "text" }
      ]
    },
    "Notice of Regulatory Violation": {
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

This letter serves as a formal notice of a regulatory violation observed in our recent audit. 
The violation pertains to {SpecificRegulation}, specifically {ViolationDetails}.

We request immediate corrective action and a detailed report outlining the steps taken to rectify
 this issue. 
Failure to comply may result in further action as outlined under {RelevantLegislation}.

Sincerely,
{YourName}
{YourPosition}
{YourCompany}
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
        { "id": "SpecificRegulation", "label": "Specific Regulation", "type": "text" },
        { "id": "ViolationDetails", "label": "Violation Details", "type": "text" },
        { "id": "RelevantLegislation", "label": "Relevant Legislation", "type": "text" }
      ]
    },
    "Compliance Certification Request": {
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

We request a compliance certification for {SpecificRegulation} as part of our internal review process. 
Kindly provide the necessary documentation confirming compliance with the stated regulation.

Please inform us if there are any additional requirements or processes to be followed.

Thank you for your attention to this matter.

Sincerely,
{YourName}
{YourPosition}
{YourCompany}
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
        { "id": "SpecificRegulation", "label": "Specific Regulation", "type": "text" }
      ]
    },
    "Regulatory Inquiry Response": {
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

In response to your recent inquiry regarding compliance with {SpecificRegulation}, 
we confirm that all necessary measures have been implemented to ensure adherence to the 
specified standards. 

Enclosed are the requested documents and reports for your review. 
Should you require further information, 
please do not hesitate to contact us.

Sincerely,
{YourName}
{YourPosition}
{YourCompany}
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
        { "id": "SpecificRegulation", "label": "Specific Regulation", "type": "text" }
      ]
    },
    "Compliance Audit Notification": {
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

This letter is to inform you of an upcoming compliance audit scheduled for {AuditDate}. 
The audit will focus on {AuditScope}, 
and we request your full cooperation during this process.

Please ensure that all relevant documentation and records are available for review. 
If you have any questions, feel free to contact us.

Sincerely,
{YourName}
{YourPosition}
{YourCompany}
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
        { "id": "AuditDate", "label": "Audit Date", "type": "date" },
        { "id": "AuditScope", "label": "Audit Scope", "type": "text" }
      ]
    },
    "Compliance Policy Implementation": {
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

We are pleased to inform you that our company has implemented new compliance policies in 
accordance with {SpecificRegulation}. 
These policies are designed to enhance our adherence to regulatory requirements and improve overall
 operational standards.

We encourage all employees and partners to review the attached policy documents and familiarize 
themselves with the new procedures. Should you have any questions, 
please contact the compliance department.

Sincerely,
{YourName}
{YourPosition}
{YourCompany}
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
        { "id": "SpecificRegulation", "label": "Specific Regulation", "type": "text" }
      ]
    },
    "Legal Compliance Report": {
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

Enclosed is the latest Legal Compliance Report for the period of {ReportPeriod}.
 The report details our compliance with {SpecificRegulation} and highlights 
 any areas of concern that require attention.

We are committed to maintaining high standards of compliance and welcome any 
feedback or suggestions you may have.

Sincerely,
{YourName}
{YourPosition}
{YourCompany}
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
        { "id": "ReportPeriod", "label": "Report Period", "type": "text" },
        { "id": "SpecificRegulation", "label": "Specific Regulation", "type": "text" }
      ]
    }
  },

     "Employment Law Letters": {
    "Employment Termination Notice": {
        template: `
        {YourName}  
        {YourPosition}  
        {YourCompany}  
        {YourAddress}  
        {City}, {State}, {ZIPCode}  
        {CurrentDate}  
        
        {EmployeeName}  
        {EmployeePosition}  
        {EmployeeAddress}  
        {City}, {State}, {ZIPCode}  
        
        Dear {EmployeeName},
        
        We regret to inform you that your employment with {YourCompany} is being terminated,
         effective {TerminationDate}. This decision is based on {ReasonForTermination},
          which has been previously discussed with you.
        
        Please return any company property by {ReturnDate}, and note that you will receive
         your final paycheck, including any accrued vacation, on {FinalPayDate}. 
         If you have any questions, please contact the HR department.
        
        We wish you the best in your future endeavors.
        
        Sincerely,  
        {YourName}  
        {YourPosition}  
        {YourCompany}  
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
        { "id": "EmployeeName", "label": "Employee's Name", "type": "text" },
        { "id": "EmployeePosition", "label": "Employee's Position", "type": "text" },
        { "id": "EmployeeAddress", "label": "Employee's Address", "type": "text" },
        { "id": "TerminationDate", "label": "Termination Date", "type": "date" },
        { "id": "ReasonForTermination", "label": "Reason for Termination", "type": "text" },
        { "id": "ReturnDate", "label": "Return Date for Company Property", "type": "date" },
        { "id": "FinalPayDate", "label": "Final Pay Date", "type": "date" }
      ]
    },
    "Employment Dispute Resolution": {
        template: `
        {YourName}  
        {YourPosition}  
        {YourCompany}  
        {YourAddress}  
        {City}, {State}, {ZIPCode}  
        {CurrentDate}  
        
        {EmployeeName}  
        {EmployeePosition}  
        {EmployeeAddress}  
        {City}, {State}, {ZIPCode}  
        
        Dear {EmployeeName},
        
        This letter is to address the employment dispute that has arisen regarding {Issue}. 
        We aim to resolve this issue amicably and professionally, 
        ensuring that all parties are heard and the resolution is fair and just.
        
        We propose the following steps to address the dispute:  
        1. {ProposedSolutionStep1}  
        2. {ProposedSolutionStep2}  
        3. {ProposedSolutionStep3}  
        
        Please respond by {ResponseDate} with your agreement or any concerns you may have.
         We are committed to resolving this matter promptly and respectfully.
        
        Sincerely,  
        {YourName}  
        {YourPosition}  
        {YourCompany}  
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
        { "id": "EmployeeName", "label": "Employee's Name", "type": "text" },
        { "id": "EmployeePosition", "label": "Employee's Position", "type": "text" },
        { "id": "EmployeeAddress", "label": "Employee's Address", "type": "text" },
        { "id": "Issue", "label": "Issue in Dispute", "type": "text" },
        { "id": "ProposedSolutionStep1", "label": "Proposed Solution Step 1", "type": "text" },
        { "id": "ProposedSolutionStep2", "label": "Proposed Solution Step 2", "type": "text" },
        { "id": "ProposedSolutionStep3", "label": "Proposed Solution Step 3", "type": "text" },
        { "id": "ResponseDate", "label": "Response Date", "type": "date" }
      ]
    },
    "Harassment Complaint Response": {
        template: `
        {YourName}  
        {YourPosition}  
        {YourCompany}  
        {YourAddress}  
        {City}, {State}, {ZIPCode}  
        {CurrentDate}  
        
        {EmployeeName}  
        {EmployeePosition}  
        {EmployeeAddress}  
        {City}, {State}, {ZIPCode}  
        
        Dear {EmployeeName},
        
        We acknowledge receipt of your harassment complaint dated {ComplaintDate}. 
        We take such matters very seriously and have initiated an investigation to 
        ensure a thorough and fair examination of the situation.
        
        Our commitment is to provide a safe and respectful workplace for all employees.
         During the investigation, we will keep the information confidential and handle the 
         matter with the utmost care. We will inform you of the findings and any actions to be taken.
        
        Please feel free to contact us if you have any concerns or additional information.
         We appreciate your cooperation and patience during this process.
        
        Sincerely,  
        {YourName}  
        {YourPosition}  
        {YourCompany}  
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
        { "id": "EmployeeName", "label": "Employee's Name", "type": "text" },
        { "id": "EmployeePosition", "label": "Employee's Position", "type": "text" },
        { "id": "EmployeeAddress", "label": "Employee's Address", "type": "text" },
        { "id": "ComplaintDate", "label": "Complaint Date", "type": "date" }
      ]
    },
    "Employee Warning Notice": {
        template: `
        {YourName}  
        {YourPosition}  
        {YourCompany}  
        {YourAddress}  
        {City}, {State}, {ZIPCode}  
        {CurrentDate}  
        
        {EmployeeName}  
        {EmployeePosition}  
        {EmployeeAddress}  
        {City}, {State}, {ZIPCode}  
        
        Dear {EmployeeName},
        
        This letter serves as a formal warning regarding your conduct and 
        performance at {YourCompany}. 
        Specifically, we have noted the following issues: {IssueDetails}.
        
        We expect immediate improvement in these areas. Failure to do so 
        may result in further disciplinary action, up to and including 
        termination of employment. We encourage you to take this opportunity
         to improve and meet the company's expectations.
        
        Please acknowledge receipt of this notice by signing below.
        
        Sincerely,  
        {YourName}  
        {YourPosition}  
        {YourCompany}  
        
        Acknowledged by:  
        {EmployeeName}  
        {Date}  
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
        { "id": "EmployeeName", "label": "Employee's Name", "type": "text" },
        { "id": "EmployeePosition", "label": "Employee's Position", "type": "text" },
        { "id": "EmployeeAddress", "label": "Employee's Address", "type": "text" },
        { "id": "IssueDetails", "label": "Details of the Issue", "type": "textarea" },
        { "id": "Date", "label": "Date of Acknowledgment", "type": "date" }
      ]
    },
    "Notice of Disciplinary Action": {
        template: `
        {YourName}  
        {YourPosition}  
        {YourCompany}  
        {YourAddress}  
        {City}, {State}, {ZIPCode}  
        {CurrentDate}  
        
        {EmployeeName}  
        {EmployeePosition}  
        {EmployeeAddress}  
        {City}, {State}, {ZIPCode}  
        
        Dear {EmployeeName},
        
        This letter serves as formal notification of disciplinary action due to {ReasonForDisciplinaryAction}.
         This action is necessary due to the seriousness of the conduct and its impact on our workplace.
        
        The specific disciplinary measures being implemented include {DisciplinaryMeasures}. 
        These actions are effective immediately and will remain in place until {EndDateOfDisciplinaryAction}.
        
        Please take this seriously and use this opportunity to improve. Failure to comply with
         these measures may result in further disciplinary action, up to and including termination.
        
        Sincerely,  
        {YourName}  
        {YourPosition}  
        {YourCompany}  
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
        { "id": "EmployeeName", "label": "Employee's Name", "type": "text" },
        { "id": "EmployeePosition", "label": "Employee's Position", "type": "text" },
        { "id": "EmployeeAddress", "label": "Employee's Address", "type": "text" },
        { "id": "ReasonForDisciplinaryAction", "label": "Reason for Disciplinary Action", "type": "text" },
        { "id": "DisciplinaryMeasures", "label": "Disciplinary Measures", "type": "textarea" },
        { "id": "EndDateOfDisciplinaryAction", "label": "End Date of Disciplinary Action", "type": "date" }
      ]
    },
    "Workplace Policy Violation Notice": {
      template: `
        {YourName}  
        {YourPosition}  
        {YourCompany}  
        {YourAddress}  
        {City}, {State}, {ZIPCode}  
        {CurrentDate}  
        
        {EmployeeName}  
        {EmployeePosition}  
        {EmployeeAddress}  
        {City}, {State}, {ZIPCode}  
        
        Dear {EmployeeName},
        
        It has come to our attention that you have violated the company's workplace 
        policy regarding {PolicyDetails}. This violation occurred on {ViolationDate} 
        and is contrary to our company's standards and values.
        
        As a result of this policy violation, we are issuing this formal notice to 
        document the incident and remind you of the importance of adhering to all 
        workplace policies. Any further violations may result in additional
         disciplinary actions.
        
        Please contact the HR department if you have any questions or concerns.
        
        Sincerely,  
        {YourName}  
        {YourPosition}  
        {YourCompany}  
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
        { "id": "EmployeeName", "label": "Employee's Name", "type": "text" },
        { "id": "EmployeePosition", "label": "Employee's Position", "type": "text" },
        { "id": "EmployeeAddress", "label": "Employee's Address", "type": "text" },
        { "id": "PolicyDetails", "label": "Details of Policy Violation", "type": "text" },
        { "id": "ViolationDate", "label": "Date of Violation", "type": "date" }
      ]
    },
    "Employment Law Compliance Notice": {
        template: `
        {YourName}  
        {YourPosition}  
        {YourCompany}  
        {YourAddress}  
        {City}, {State}, {ZIPCode}  
        {CurrentDate}  
        
        {EmployeeName}  
        {EmployeePosition}  
        {EmployeeAddress}  
        {City}, {State}, {ZIPCode}  
        
        Dear {EmployeeName},
        
        This notice is to inform you of recent updates to our employment policies
         to ensure compliance with new employment laws. 
         These changes are effective immediately and are in place to align with the
          latest legal standards.
        
        The updated policies include:  
        1. {UpdatedPolicy1}  
        2. {UpdatedPolicy2}  
        3. {UpdatedPolicy3}  
        
        Please review these changes and ensure your understanding and compliance.
         If you have any questions, feel free to contact the HR department.
        
        Sincerely,  
        {YourName}  
        {YourPosition}  
        {YourCompany}  
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
        { "id": "EmployeeName", "label": "Employee's Name", "type": "text" },
        { "id": "EmployeePosition", "label": "Employee's Position", "type": "text" },
        { "id": "EmployeeAddress", "label": "Employee's Address", "type": "text" },
        { "id": "UpdatedPolicy1", "label": "Updated Policy 1", "type": "text" },
        { "id": "UpdatedPolicy2", "label": "Updated Policy 2", "type": "text" },
        { "id": "UpdatedPolicy3", "label": "Updated Policy 3", "type": "text" }
      ]
    }
  },


  "GovernmentLetters": {
    "Request for Public Records": {
        template: `
        [Your Name]  
        [Your Position]  
        [Your Organization]  
        [Your Address]  
        [City], [State], [ZIP Code]  
        [Current Date]  
        
        [Recipient's Name]  
        [Recipient's Position]  
        [Government Agency Name]  
        [Agency Address]  
        [City], [State], [ZIP Code]  
        
        Dear [Recipient's Name],
        
        I am writing to formally request access to public records under 
        the Freedom of Information Act. Specifically, I am seeking 
        the following records: [Description of Records Requested].
        
        Please provide these documents at your earliest convenience. 
        If there are any fees associated with this request,
         please let me know beforehand.
        
        Thank you for your assistance in this matter.
        
        Sincerely,  
        [Your Name]  
        [Your Position]  
        [Your Organization]  
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
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "GovernmentAgencyName", "label": "Government Agency Name", "type": "text" },
        { "id": "AgencyAddress", "label": "Agency Address", "type": "text" },
        { "id": "DescriptionOfRecordsRequested", "label": "Description of Records Requested", "type": "textarea" }
      ]
    },
    "Complaint Against Government Service": {
      template: `
        [Your Name]  
        [Your Address]  
        [City], [State], [ZIP Code]  
        [Current Date]  
        
        [Recipient's Name]  
        [Recipient's Position]  
        [Government Agency Name]  
        [Agency Address]  
        [City], [State], [ZIP Code]  
        
        Dear [Recipient's Name],
        
        I am writing to file a formal complaint regarding the service 
        I received from your agency on [Date of Service]. 
        The issue pertains to [Detailed Description of Complaint].
        
        I request that you investigate this matter and provide a resolution. 
        Please contact me if you need further information.
        
        Thank you for your prompt attention to this issue.
        
        Sincerely,  
        [Your Name]  
      `,
      fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "GovernmentAgencyName", "label": "Government Agency Name", "type": "text" },
        { "id": "AgencyAddress", "label": "Agency Address", "type": "text" },
        { "id": "DateOfService", "label": "Date of Service", "type": "date" },
        { "id": "DetailedDescriptionOfComplaint", "label": "Detailed Description of Complaint", "type": "textarea" }
      ]
    },
    "Request for Government Grant": {
        template: `
        [Your Name]  
        [Your Position]  
        [Your Organization]  
        [Your Address]  
        [City], [State], [ZIP Code]  
        [Current Date]  
        
        [Recipient's Name]  
        [Recipient's Position]  
        [Government Agency Name]  
        [Agency Address]  
        [City], [State], [ZIP Code]  
        
        Dear [Recipient's Name],
        
        I am writing to request a grant for [Purpose of Grant].
         Our organization is committed to [Brief Description of 
         Your Organization’s Mission or Project].
        
        We are seeking a grant of [Amount Requested] to 
        support [Specific Use of Funds]. 
        Attached is our detailed proposal and budget plan.
        
        We appreciate your consideration and look forward to your response.
        
        Sincerely,  
        [Your Name]  
        [Your Position]  
        [Your Organization]  
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
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "GovernmentAgencyName", "label": "Government Agency Name", "type": "text" },
        { "id": "AgencyAddress", "label": "Agency Address", "type": "text" },
        { "id": "PurposeOfGrant", "label": "Purpose of Grant", "type": "textarea" },
        { "id": "AmountRequested", "label": "Amount Requested", "type": "text" },
        { "id": "SpecificUseOfFunds", "label": "Specific Use of Funds", "type": "textarea" }
      ]
    },
    "Notification of Policy Changes": {
        template: `
        [Your Name]  
        [Your Position]  
        [Your Organization]  
        [Your Address]  
        [City], [State], [ZIP Code]  
        [Current Date]  
        
        [Recipient's Name]  
        [Recipient's Position]  
        [Government Agency Name]  
        [Agency Address]  
        [City], [State], [ZIP Code]  
        
        Dear [Recipient's Name],
        
        We are writing to inform you of important changes to our policies 
        effective [Effective Date]. These changes include:
        1. [Policy Change 1]
        2. [Policy Change 2]
        3. [Policy Change 3]
        
        Please review the updated policies and let us know if you have 
        any questions or concerns.
        
        Sincerely,  
        [Your Name]  
        [Your Position]  
        [Your Organization]  
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
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "GovernmentAgencyName", "label": "Government Agency Name", "type": "text" },
        { "id": "AgencyAddress", "label": "Agency Address", "type": "text" },
        { "id": "EffectiveDate", "label": "Effective Date", "type": "date" },
        { "id": "PolicyChanges", "label": "Policy Changes", "type": "textarea" }
      ]
    },
    "Request for Government Assistance": {
        template: `
        [Your Name]  
        [Your Address]  
        [City], [State], [ZIP Code]  
        [Current Date]  
        
        [Recipient's Name]  
        [Recipient's Position]  
        [Government Agency Name]  
        [Agency Address]  
        [City], [State], [ZIP Code]  
        
        Dear [Recipient's Name],
        
        I am seeking assistance from your agency for [Reason for Request]. 
        Specifically, I am requesting [Type of Assistance Needed].
        
        I have attached relevant documentation and details of my situation. 
        Please review and let me know how I can proceed to obtain the required assistance.
        
        Thank you for your time and consideration.
        
        Sincerely,  
        [Your Name]  
      `,
        fields: [
        { "id": "YourName", "label": "Your Name", "type": "text" },
        { "id": "YourAddress", "label": "Your Address", "type": "text" },
        { "id": "City", "label": "City", "type": "text" },
        { "id": "State", "label": "State", "type": "text" },
        { "id": "ZIPCode", "label": "ZIP Code", "type": "text" },
        { "id": "CurrentDate", "label": "Current Date", "type": "date" },
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "GovernmentAgencyName", "label": "Government Agency Name", "type": "text" },
        { "id": "AgencyAddress", "label": "Agency Address", "type": "text" },
        { "id": "ReasonForRequest", "label": "Reason for Request", "type": "textarea" },
        { "id": "TypeOfAssistanceNeeded", "label": "Type of Assistance Needed", "type": "textarea" }
      ]
    },
    "Notification of Public Hearing": {
        template: `
        [Your Name]  
        [Your Position]  
        [Your Organization]  
        [Your Address]  
        [City], [State], [ZIP Code]  
        [Current Date]  
        
        [Recipient's Name]  
        [Recipient's Position]  
        [Government Agency Name]  
        [Agency Address]  
        [City], [State], [ZIP Code]  
        
        Dear [Recipient's Name],
        
        This letter is to inform you of a public hearing scheduled 
        for [Date of Hearing] at [Time of Hearing]. 
        The purpose of the hearing is to discuss [Subject of Hearing].
        
        The hearing will be held at [Location of Hearing]. 
        Your attendance and participation would be greatly appreciated.
        
        Sincerely,  
        [Your Name]  
        [Your Position]  
        [Your Organization]  
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
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "GovernmentAgencyName", "label": "Government Agency Name", "type": "text" },
        { "id": "AgencyAddress", "label": "Agency Address", "type": "text" },
        { "id": "DateOfHearing", "label": "Date of Hearing", "type": "date" },
        { "id": "TimeOfHearing", "label": "Time of Hearing", "type": "text" },
        { "id": "SubjectOfHearing", "label": "Subject of Hearing", "type": "textarea" },
        { "id": "LocationOfHearing", "label": "Location of Hearing", "type": "text" }
      ]
    },
    "Request for Government Feedback": {
        template: `
        [Your Name]  
        [Your Position]  
        [Your Organization]  
        [Your Address]  
        [City], [State], [ZIP Code]  
        [Current Date]  
        
        [Recipient's Name]  
        [Recipient's Position]  
        [Government Agency Name]  
        [Agency Address]  
        [City], [State], [ZIP Code]  
        
        Dear [Recipient's Name],
        
        I am writing to request feedback on [Subject or Proposal]. 
        Our organization is seeking input from your agency to ensure 
        that [Brief Description of Project or Proposal].
        
        Your feedback is highly valued and will contribute 
        to [Purpose of Feedback].
         Please provide your comments or suggestions by [Deadline].
        
        Thank you for your time and consideration.
        
        Sincerely,  
        [Your Name]  
        [Your Position]  
        [Your Organization]  
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
        { "id": "RecipientName", "label": "Recipient's Name", "type": "text" },
        { "id": "RecipientPosition", "label": "Recipient's Position", "type": "text" },
        { "id": "GovernmentAgencyName", "label": "Government Agency Name", "type": "text" },
        { "id": "AgencyAddress", "label": "Agency Address", "type": "text" },
        { "id": "SubjectOrProposal", "label": "Subject or Proposal", "type": "textarea" },
        { "id": "PurposeOfFeedback", "label": "Purpose of Feedback", "type": "textarea" },
        { "id": "Deadline", "label": "Deadline", "type": "date" }
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


    // Apply CSS styles to ensure proper wrapping and width constraints
  element.style.width = '8.5in'; // Width of a standard letter
  element.style.maxWidth = '8.5in'; // Max width should not exceed standard letter width
  element.style.boxSizing = 'border-box'; // Include padding and border in the element's width
  element.style.overflow = 'hidden'; // Prevent overflow
  element.style.wordWrap = 'break-word'; // Ensure long words break into the next line
  element.style.whiteSpace = 'pre-wrap'; // Preserve whitespace and ensure wrapping
  element.style.lineHeight = '1.5'; // Set line height for better readability

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: `${selectedTemplate}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, // Increase scale for better quality
        logging: true, // Enable logging for debugging
        useCORS: true, // Use CORS to load images
       
      },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    element.style.width = '8.5in'; // Set the width to 8.5 inches (standard letter size)
    element.style.boxSizing = 'border-box'; // Include padding and border in the element's width
    element.style.overflow = 'hidden'; // Prevent overflow
    element.style.wordWrap = 'break-word'; // Ensure long words break into the next line
  
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
