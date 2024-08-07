from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
    subject = serializers.CharField(max_length=255, required=False)
    category = serializers.CharField(max_length=100)
    email_type = serializers.CharField(max_length=100)
    RecipientName = serializers.CharField(max_length=100, required=False)
    RecipientEmail = serializers.EmailField(required=False)
    SenderCompany = serializers.CharField(max_length=100, required=False)
    SenderEmail = serializers.EmailField()
    SenderName = serializers.CharField(max_length=100, required=False)
    SenderPosition = serializers.CharField(max_length=100, required=False)
    ProductName = serializers.CharField(max_length=100, required=False)
    CompanyName = serializers.CharField(max_length=100, required=False)
    SenderPhone = serializers.CharField(max_length=100, required=False)
    EmailBody = serializers.CharField(required=False)

    # Additional fields based on templates.json
    CompanySpecialty = serializers.CharField(max_length=100, required=False)
    CompanyMission = serializers.CharField(max_length=100, required=False)
    RelevantIndustry = serializers.CharField(max_length=100, required=False)
    PreviousDiscussionTopic = serializers.CharField(max_length=100, required=False)
    ServiceOrProduct = serializers.CharField(max_length=100, required=False)
    ProductOrService = serializers.CharField(max_length=100, required=False)
    ProductFeatures = serializers.CharField(max_length=100, required=False)
    ProductBenefits = serializers.CharField(max_length=100, required=False)
    Industry = serializers.CharField(max_length=100, required=False)
    TargetAudience = serializers.CharField(max_length=100, required=False)
    BenefitOrOutcome = serializers.CharField(max_length=100, required=False)
    KeyFeature1 = serializers.CharField(max_length=100, required=False)
    KeyFeature2 = serializers.CharField(max_length=100, required=False)
    KeyFeature3 = serializers.CharField(max_length=100, required=False)
    ProductAdvantage = serializers.CharField(max_length=100, required=False)
    SpecificArea = serializers.CharField(max_length=100, required=False)
    DiscountPercentage = serializers.CharField(max_length=100, required=False)
    PromoCode = serializers.CharField(max_length=100, required=False)
    ExpirationDate = serializers.CharField(max_length=100, required=False)
    ClientName = serializers.CharField(max_length=100, required=False)
    SuccessOutcome = serializers.CharField(max_length=100, required=False)
    ClientProblem = serializers.CharField(max_length=100, required=False)
    SolutionBenefit = serializers.CharField(max_length=100, required=False)
    Discount = serializers.CharField(max_length=255, required=False)
    RSVPDate = serializers.CharField(required=False)  # Use CharField for flexible date formats
    EventDate = serializers.CharField(required=False)  # Use CharField for flexible date formats
    EventLocation = serializers.CharField(max_length=255, required=False)
    EventName = serializers.CharField(max_length=255, required=False)
    EventHighlights = serializers.CharField(max_length=1000, required=False)
    SurveyLink = serializers.CharField(max_length=1000, required=False)

     #Customer services
    SupportEmail = serializers.CharField(max_length=1000, required=False)
    SupportPhone = serializers.CharField(max_length=1000, required=False)
    SupportAgentName = serializers.CharField(max_length=1000, required=False)

    ComplaintID = serializers.CharField(max_length=1000, required=False)
    ResolutionDetails = serializers.CharField(max_length=1000, required=False)

    OrderNumber = serializers.CharField(max_length=1000, required=False)
    OrderDetails = serializers.CharField(max_length=1000, required=False)

    TrackingNumber = serializers.CharField(max_length=1000, required=False)
    EstimatedDeliveryDate = serializers.CharField(max_length=1000, required=False)

    RequestID = serializers.CharField(max_length=1000, required=False)
    RequestType = serializers.CharField(max_length=1000, required=False)
    RefundAmount = serializers.CharField(max_length=1000, required=False)

    SupportTeam = serializers.CharField(max_length=1000, required=False)
    FeedbackSurveyLink = serializers.CharField(max_length=1000, required=False)

    TicketNumber = serializers.CharField(max_length=1000, required=False)
    
    #Hr & Internal communication emails
    Salary = serializers.CharField(max_length=1000, required=False)
    StartDate = serializers.CharField(max_length=1000, required=False)
    Position = serializers.CharField(max_length=1000, required=False)
    
    OnboardingDate = serializers.CharField(max_length=1000, required=False)

    Month = serializers.CharField(max_length=1000, required=False)
    UpcomingEvents = serializers.CharField(max_length=1000, required=False)
    EmployeeSpotlight = serializers.CharField(max_length=1000, required=False)
    Highlights = serializers.CharField(max_length=1000, required=False)
    
    PolicyName = serializers.CharField(max_length=1000, required=False)
    EffectiveDate = serializers.CharField(max_length=1000, required=False)
    
    MeetingLocation = serializers.CharField(max_length=1000, required=False)
    MeetingTime = serializers.CharField(max_length=1000, required=False)
    MeetingDate = serializers.CharField(max_length=1000, required=False)
    MeetingTopic = serializers.CharField(max_length=1000, required=False)

    ReviewDate = serializers.CharField(max_length=1000, required=False)

    Achievement = serializers.CharField(max_length=1000, required=False)


     #Partenrship and collabration emails
    YourName = serializers.CharField(max_length=1000, required=False)
    YourCompany = serializers.CharField(max_length=1000, required=False)
    
    YourPhone = serializers.CharField(max_length=1000, required=False)
    RecipientCompany = serializers.CharField(max_length=1000, required=False)
    YourPosition = serializers.CharField(max_length=1000, required=False)
    
    PartnerCompany = serializers.CharField(max_length=1000, required=False)

    #Thank You Emails
    OrderDate = serializers.CharField(max_length=1000, required=False)
    AmountPaid = serializers.CharField(max_length=1000, required=False)

    FeedbackDetails = serializers.CharField(max_length=1000, required=False)
    FeedbackTopic = serializers.CharField(max_length=1000, required=False)

    #operational Emails
    MaintenanceDate = serializers.CharField(max_length=1000, required=False)
    EndTime = serializers.CharField(max_length=1000, required=False)
    StartTime = serializers.CharField(max_length=1000, required=False)
    CompanyPhone = serializers.CharField(max_length=1000, required=False)
    CompanyAddress = serializers.CharField(max_length=1000, required=False)

    ResolutionTime = serializers.CharField(max_length=1000, required=False)
    InterruptionDate = serializers.CharField(max_length=1000, required=False)
    InterruptionReason = serializers.CharField(max_length=1000, required=False)
    
    LinkExpirationTime = serializers.CharField(max_length=1000, required=False)
    ActivationURL = serializers.CharField(max_length=1000, required=False)
    ActivationLink = serializers.CharField(max_length=1000, required=False)

    ResetURL = serializers.CharField(max_length=1000, required=False)
    ResetLink = serializers.CharField(max_length=1000, required=False)
 
    DueDate = serializers.CharField(max_length=1000, required=False)
    InvoiceDate = serializers.CharField(max_length=1000, required=False)
    InvoiceMonth = serializers.CharField(max_length=1000, required=False)
    InvoiceNumber = serializers.CharField(max_length=1000, required=False)
    TotalAmount = serializers.CharField(max_length=1000, required=False)

    RenewalDate = serializers.CharField(max_length=1000, required=False)
    RenewalAmount = serializers.CharField(max_length=1000, required=False)
    CurrentPlan = serializers.CharField(max_length=1000, required=False)

    InactivePeriod = serializers.CharField(max_length=1000, required=False)
    DeactivationDate = serializers.CharField(max_length=1000, required=False)
    AccountName = serializers.CharField(max_length=1000, required=False)

    #Professional emails
    PreviousCompany = serializers.CharField(max_length=1000, required=False)
    HiringManagerName = serializers.CharField(max_length=1000, required=False)
    RelevantSkills = serializers.CharField(max_length=1000, required=False)
    YourField = serializers.CharField(max_length=1000, required=False)
    JobBoard = serializers.CharField(max_length=1000, required=False)
    JobTitle = serializers.CharField(max_length=1000, required=False)
    describeachievementsandresponsibilities = serializers.CharField(max_length=1000, required=False)
    reasonForInterestInCompany = serializers.CharField(max_length=1000, required=False)

    InterviewDate = serializers.CharField(max_length=1000, required=False)
    InterviewersName = serializers.CharField(max_length=1000, required=False)
    specificaspectofthecompanyorrolediscussed = serializers.CharField(max_length=1000, required=False)
    relevantexperienceorskill = serializers.CharField(max_length=1000, required=False)
    specificcompanygoalorproject = serializers.CharField(max_length=1000, required=False)

    specificSkills = serializers.CharField(max_length=1000, required=False)
    RelevantExperience = serializers.CharField(max_length=1000, required=False)
    Department = serializers.CharField(max_length=1000, required=False)
    specificAchievementsOrCulture = serializers.CharField(max_length=1000, required=False)


    specificProjectOrInitiative = serializers.CharField(max_length=1000, required=False)

    specificProjectOrRoleTasks = serializers.CharField(max_length=1000, required=False)

    OriginalInterviewDate = serializers.CharField(max_length=1000, required=False)
    ReasonForRescheduling = serializers.CharField(max_length=1000, required=False)
    AlternativeDate = serializers.CharField(max_length=1000, required=False)

    relevantExperienceOrSkills = serializers.CharField(max_length=1000, required=False)
    specificReason = serializers.CharField(max_length=1000, required=False)

    ApplicantName = serializers.CharField(max_length=1000, required=False)

    SubmissionDate = serializers.CharField(max_length=1000, required=False)

    RelevantExperienceSkills = serializers.CharField(max_length=1000, required=False)

    ReferrersName = serializers.CharField(max_length=1000, required=False)
     
     #Meeting request emails
    SpecificTopicOrProject = serializers.CharField(max_length=1000, required=False)
    Topic = serializers.CharField(max_length=1000, required=False)

    SpecificTopicOrAgenda = serializers.CharField(max_length=255, required=False)

    OriginalMeetingDate = serializers.CharField(max_length=1000, required=False)
    OriginalMeetingTime = serializers.CharField(max_length=1000, required=False)

    AgendaItem1 = serializers.CharField(max_length=1000, required=False)
    AgendaItem2 = serializers.CharField(max_length=1000, required=False)
    AgendaItem3 = serializers.CharField(max_length=1000, required=False)
    AgendaItem4 = serializers.CharField(max_length=1000, required=False)

    ReasonForCancellation = serializers.CharField(max_length=255, required=False)

    PreferredPlatform = serializers.CharField(max_length=255, required=False)

    #Recomendation requirement emails
    SpecificRequirements = serializers.CharField(max_length=1000, required=False)
    KeySkills = serializers.CharField(max_length=1000, required=False)
    SubmissionDeadline = serializers.CharField(max_length=1000, required=False)
    SpecificPosition = serializers.CharField(max_length=1000, required=False)

    
    SkillsAchievements = serializers.CharField(max_length=1000, required=False)

    JobPostingURL = serializers.CharField(max_length=1000, required=False)

    SpecificQualities = serializers.CharField(max_length=1000, required=False)
    SpecificProgram = serializers.CharField(max_length=1000, required=False)

    SpecificJob = serializers.CharField(max_length=1000, required=False)

    SpecificAcademicAchievements = serializers.CharField(max_length=1000, required=False)
    SpecificAcademicProgram = serializers.CharField(max_length=1000, required=False)

     #Feedback email
    FeedbackDeadline = serializers.CharField(max_length=1000, required=False)
    TimePeriod = serializers.CharField(max_length=1000, required=False)

    CustomerName = serializers.CharField(max_length=1000, required=False)

    EmployeeName = serializers.CharField(max_length=1000, required=False)

    CompanyName = serializers.CharField(max_length=1000, required=False)

    PeerName = serializers.CharField(max_length=1000, required=False)

    ProjectName = serializers.CharField(max_length=1000, required=False)

    #Network emails
    SpecificInterest = serializers.CharField(max_length=1000, required=False)
    IndustryField = serializers.CharField(max_length=1000, required=False)
    YourLinkedInProfile = serializers.CharField(max_length=1000, required=False)
    YourCurrentRole = serializers.CharField(max_length=1000, required=False)
    ReasonForReachingOut = serializers.CharField(max_length=1000, required=False)
    IndustryField = serializers.CharField(max_length=1000, required=False)

    PotentialOpportunity = serializers.CharField(max_length=1000, required=False)
    TopicDiscussed = serializers.CharField(max_length=1000, required=False)
    RecipientIndustryField = serializers.CharField(max_length=1000, required=False)

    PurposeOfEvent = serializers.CharField(max_length=1000, required=False)

    RecentProjectsUpdates = serializers.CharField(max_length=1000, required=False)
   
     #Offers and nagotion emails
    DesiredSalary = serializers.CharField(max_length=1000, required=False)

    RequestedSalary = serializers.CharField(max_length=1000, required=False)
    OtherOfferSalary = serializers.CharField(max_length=1000, required=False)
    


    def validate(self, attrs):
        email_type = attrs.get('email_type')

        
        
        return attrs