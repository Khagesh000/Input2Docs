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
    
    #Customer support emails ---> detailed order confirmation
    ItemName = serializers.CharField(max_length=1000, required=False)
    ShippingAddress = serializers.CharField(max_length=1000, required=False)
    ItemPrice = serializers.CharField(max_length=1000, required=False)
    ItemQuantity = serializers.CharField(max_length=1000, required=False)

    OrderTotal = serializers.CharField(max_length=1000, required=False)
    PaymentMethod = serializers.CharField(max_length=1000, required=False)

    TotalLoyaltyPoints = serializers.CharField(max_length=1000, required=False)
    LoyaltyPoints = serializers.CharField(max_length=1000, required=False)

    CustomerServiceContact = serializers.CharField(max_length=1000, required=False)
    SpecialInstructions = serializers.CharField(max_length=1000, required=False)
    CompanyContactInfo = serializers.CharField(max_length=1000, required=False)
    DeliveryDate = serializers.CharField(max_length=1000, required=False)
    DeliveryAddress = serializers.CharField(max_length=1000, required=False)

    PersonalizedMessage = serializers.CharField(max_length=1000, required=False)
    GiftReceiptOption = serializers.CharField(max_length=1000, required=False)
    GiftWrapOption = serializers.CharField(max_length=1000, required=False)

    ReturnWindow = serializers.CharField(max_length=1000, required=False)
    ReturnProcess = serializers.CharField(max_length=1000, required=False)
    ReturnShippingCosts = serializers.CharField(max_length=1000, required=False)
    ReturnCondition = serializers.CharField(max_length=1000, required=False)

    #Shipping notification emails
    ShippingCarrier = serializers.CharField(max_length=1000, required=False)
    ShippingMethod = serializers.CharField(max_length=1000, required=False)
    ExpectedDeliveryTime = serializers.CharField(max_length=1000, required=False)

    TrackingLink = serializers.CharField(max_length=1000, required=False)

    ShippingStatus = serializers.CharField(max_length=1000, required=False)

    DeliveryWindow = serializers.CharField(max_length=1000, required=False)


    #Order cancellation email
    RefundMethod = serializers.CharField(max_length=1000, required=False)
    OrderAmount = serializers.CharField(max_length=1000, required=False)
    RefundTimeframe = serializers.CharField(max_length=1000, required=False)

    CancellationReason = serializers.CharField(max_length=1000, required=False)

    ReorderLink = serializers.CharField(max_length=1000, required=False)

    SupportContact = serializers.CharField(max_length=1000, required=False)
    SupportHours = serializers.CharField(max_length=1000, required=False)

    AccountLink = serializers.CharField(max_length=1000, required=False)

    #Return and refund emails
    ReturnReason = serializers.CharField(max_length=1000, required=False)
    ReturnAuthorization = serializers.CharField(max_length=1000, required=False)
    ReturnItems = serializers.CharField(max_length=1000, required=False)

    ReturnDate = serializers.CharField(max_length=1000, required=False)

    RefundDate = serializers.CharField(max_length=1000, required=False)

    EstimatedTimeframe = serializers.CharField(max_length=1000, required=False)

    ReturnStatus = serializers.CharField(max_length=1000, required=False)
    ExpectedRefundDate = serializers.CharField(max_length=1000, required=False)

    ReturnPolicyLink = serializers.CharField(max_length=1000, required=False)
    RefundProcessingTime = serializers.CharField(max_length=1000, required=False)

    CompensationDetails = serializers.CharField(max_length=1000, required=False)
    IssueSummary = serializers.CharField(max_length=1000, required=False)

    ExpectedResponseTime = serializers.CharField(max_length=1000, required=False)
    TicketSummary = serializers.CharField(max_length=1000, required=False)
    SupportContactInfo = serializers.CharField(max_length=1000, required=False)
    
    ResolutionSummary = serializers.CharField(max_length=1000, required=False)
    ResolutionDate = serializers.CharField(max_length=1000, required=False)

    DetailsRequired = serializers.CharField(max_length=1000, required=False)

    CurrentStatus = serializers.CharField(max_length=1000, required=False)
    EstimatedResolutionTime = serializers.CharField(max_length=1000, required=False)
    ActionsTaken = serializers.CharField(max_length=1000, required=False)
    NextSteps = serializers.CharField(max_length=1000, required=False)

    EscalationReason = serializers.CharField(max_length=1000, required=False)
    ExpectedResolutionTime = serializers.CharField(max_length=1000, required=False)
    AdvancedSupportContact = serializers.CharField(max_length=1000, required=False)

    InteractionDate = serializers.CharField(max_length=1000, required=False)

    FeedbackLink = serializers.CharField(max_length=1000, required=False)
    ClosureDate = serializers.CharField(max_length=1000, required=False)

     #Feedback Request emails
    ServiceDescription = serializers.CharField(max_length=1000, required=False)
    ServiceDate = serializers.CharField(max_length=1000, required=False)

    ReviewLink = serializers.CharField(max_length=1000, required=False)
    PurchaseDate = serializers.CharField(max_length=1000, required=False)

    CompletionTime = serializers.CharField(max_length=1000, required=False)
    SurveyTopic = serializers.CharField(max_length=1000, required=False)

    ExperienceSummary = serializers.CharField(max_length=1000, required=False)

    FeatureDescription = serializers.CharField(max_length=1000, required=False)

    # Apology email
    CompensationOffer = serializers.CharField(max_length=1000, required=False)
    YourTitle = serializers.CharField(max_length=1000, required=False)
    FailureDate = serializers.CharField(max_length=1000, required=False)
    ServiceIssue = serializers.CharField(max_length=1000, required=False)

    DefectDescription = serializers.CharField(max_length=1000, required=False)

    DiscountAmount = serializers.CharField(max_length=1000, required=False)
    ErrorDescription = serializers.CharField(max_length=1000, required=False)

    OriginalDeliveryDate = serializers.CharField(max_length=1000, required=False)
    NewDeliveryDate = serializers.CharField(max_length=1000, required=False)
 
    RepresentativeName = serializers.CharField(max_length=1000, required=False)
    IssueDescription = serializers.CharField(max_length=1000, required=False)

    AffectedInformation = serializers.CharField(max_length=1000, required=False)
    BreachDate = serializers.CharField(max_length=1000, required=False)

    CorrectiveActions = serializers.CharField(max_length=1000, required=False)
    MiscommunicationNature = serializers.CharField(max_length=1000, required=False)
    MiscommunicationDate = serializers.CharField(max_length=1000, required=False)

    #NEwtworkin emails --->Network introduction
    YourContactInfo = serializers.CharField(max_length=1000, required=False)
    
    RelevantInterest = serializers.CharField(max_length=1000, required=False)
    Number = serializers.CharField(max_length=1000, required=False)
    NotableAchievements = serializers.CharField(max_length=1000, required=False)
    Specialization = serializers.CharField(max_length=1000, required=False)
    PreviousRoles = serializers.CharField(max_length=1000, required=False)

    ReasonForContact = serializers.CharField(max_length=1000, required=False)
    SpecificIssueOrOpportunity = serializers.CharField(max_length=1000, required=False)
    CollaborateDiscussSolve = serializers.CharField(max_length=1000, required=False)

    RelatedActivityOrProject = serializers.CharField(max_length=1000, required=False)
    CommonInterest = serializers.CharField(max_length=1000, required=False)
    AspectOfCommonInterest = serializers.CharField(max_length=1000, required=False)

    PurposeofRequest = serializers.CharField(max_length=1000, required=False)
    RelevantField = serializers.CharField(max_length=1000, required=False)
    SpecificAction = serializers.CharField(max_length=1000, required=False)
    DetailedRequest = serializers.CharField(max_length=1000, required=False)

    DaysTimes = serializers.CharField(max_length=1000, required=False)

    MeetingDiscussion = serializers.CharField(max_length=1000, required=False)

    #Follow UP emails
    NextStepsorActions = serializers.CharField(max_length=1000, required=False)
    KeyPointsorTopicsDiscussed = serializers.CharField(max_length=1000, required=False)

    KeyTopicsorDiscussions = serializers.CharField(max_length=1000, required=False)
    InterviewerName = serializers.CharField(max_length=1000, required=False)

    ProjectOpportunity = serializers.CharField(max_length=1000, required=False)
    DateOfSubmission = serializers.CharField(max_length=1000, required=False)

    PreviousEmailDate = serializers.CharField(max_length=1000, required=False)
    Subject = serializers.CharField(max_length=1000, required=False)

    TopicofDiscussion = serializers.CharField(max_length=1000, required=False)

    DetailsofAgreementorActionItems = serializers.CharField(max_length=1000, required=False)

    DiscussionDate = serializers.CharField(max_length=1000, required=False)

    #Thank you email
    ReferrerName = serializers.CharField(max_length=1000, required=False)
    ReferralName = serializers.CharField(max_length=1000, required=False)

    FeedbackDate = serializers.CharField(max_length=1000, required=False)
    
    SpecificOutcomeResult = serializers.CharField(max_length=1000, required=False)
    SpecificEventProject = serializers.CharField(max_length=1000, required=False)

    HostName = serializers.CharField(max_length=1000, required=False)
    SpecificDetail = serializers.CharField(max_length=1000, required=False)
    Date = serializers.CharField(max_length=1000, required=False)
    EventLocation = serializers.CharField(max_length=1000, required=False)

    OutcomeResult = serializers.CharField(max_length=1000, required=False)
    SpecificActionContribution = serializers.CharField(max_length=1000, required=False)
    SpecificTaskProject = serializers.CharField(max_length=1000, required=False)

    #Referal Request email
    RelevantFieldIndustry = serializers.CharField(max_length=1000, required=False)

    ReasonforIntroduction = serializers.CharField(max_length=1000, required=False)
    TargetPersonOrganization = serializers.CharField(max_length=1000, required=False)
    
    TargetMarketIndustry = serializers.CharField(max_length=1000, required=False)

    ServiceType = serializers.CharField(max_length=1000, required=False)
    DesiredOutcomes = serializers.CharField(max_length=1000, required=False)

    KeyFeatures = serializers.CharField(max_length=1000, required=False)

    SpecificTopics = serializers.CharField(max_length=1000, required=False)

    #Thank you for attending
    PresentationDate = serializers.CharField(max_length=1000, required=False)
    PresentationTopic = serializers.CharField(max_length=1000, required=False)
  
    SharedInterest = serializers.CharField(max_length=1000, required=False)
 
    #Collabration proposal email
    ProjectDescription = serializers.CharField(max_length=1000, required=False)
    ExpectedOutcome = serializers.CharField(max_length=1000, required=False)
    
    ExpectedBenefits = serializers.CharField(max_length=1000, required=False)
    PartnershipGoals = serializers.CharField(max_length=1000, required=False)

    EventDescription = serializers.CharField(max_length=1000, required=False)
    EventBenefits = serializers.CharField(max_length=1000, required=False)
    
    ContentArea = serializers.CharField(max_length=1000, required=False)
    CollaborationDetails = serializers.CharField(max_length=1000, required=False)
    ExpectedOutcomes = serializers.CharField(max_length=1000, required=False)

    ResearchField = serializers.CharField(max_length=1000, required=False)
    ResearchFocus = serializers.CharField(max_length=1000, required=False)

    ProductArea = serializers.CharField(max_length=1000, required=False)
    ProductDescription = serializers.CharField(max_length=1000, required=False)

    PromotionDetails = serializers.CharField(max_length=1000, required=False)
    ExpectedResults = serializers.CharField(max_length=1000, required=False)

    #Career advice emails
    SpecificCareerAspect = serializers.CharField(max_length=1000, required=False)
    RelevantQuestions = serializers.CharField(max_length=1000, required=False)

    SpecificTrendOrDevelopment = serializers.CharField(max_length=1000, required=False)
    RelevantAspect = serializers.CharField(max_length=1000, required=False)

    InterviewTips = serializers.CharField(max_length=1000, required=False)
    PreparationAreas = serializers.CharField(max_length=1000, required=False)

    SpecificJobMarketTrends = serializers.CharField(max_length=1000, required=False)
    RelevantJobSearchAspect = serializers.CharField(max_length=1000, required=False)

    TypeOfProfessionalsOrOrganizations = serializers.CharField(max_length=1000, required=False)

    MentorshipTopics = serializers.CharField(max_length=1000, required=False)
    SpecificCareerGoals = serializers.CharField(max_length=1000, required=False)

    #Event invitation emails
    RSVPDeadline = serializers.CharField(max_length=1000, required=False)

    KeySessions = serializers.CharField(max_length=1000, required=False)
    #Event remainder emails
    EventHighlight1 = serializers.CharField(max_length=1000, required=False)
    EventHighlight2 = serializers.CharField(max_length=1000, required=False)
    EventHighlight3 = serializers.CharField(max_length=1000, required=False)

    SpeakerTopic = serializers.CharField(max_length=1000, required=False)
    EventTopics = serializers.CharField(max_length=1000, required=False)

    Highlight1 = serializers.CharField(max_length=1000, required=False)
    Highlight2 = serializers.CharField(max_length=1000, required=False)
    Highlight3 = serializers.CharField(max_length=1000, required=False)

    Highlight1 = serializers.CharField(max_length=1000, required=False)
    Highlight2 = serializers.CharField(max_length=1000, required=False)
    Highlight3 = serializers.CharField(max_length=1000, required=False)

    ParkingInfo = serializers.CharField(max_length=1000, required=False)
    TransportationInfo = serializers.CharField(max_length=1000, required=False)
    VenueAddress = serializers.CharField(max_length=1000, required=False)

    AgendaDetails = serializers.CharField(max_length=1000, required=False)

    RegistrationDeadline = serializers.CharField(max_length=1000, required=False)
    RegistrationLink = serializers.CharField(max_length=1000, required=False)

    Instruction1 = serializers.CharField(max_length=1000, required=False)
    Instruction2 = serializers.CharField(max_length=1000, required=False)
    Instruction3 = serializers.CharField(max_length=1000, required=False)

    EventVenue = serializers.CharField(max_length=1000, required=False)
    SupportPhone = serializers.CharField(max_length=1000, required=False)
    EventTime = serializers.CharField(max_length=1000, required=False)

    #Event confirmation email
    EventAgenda = serializers.CharField(max_length=1000, required=False)

    SeatNumber = serializers.CharField(max_length=1000, required=False)

    RequestDetails = serializers.CharField(max_length=1000, required=False)

    #Event follow up email
    FeedbackEmail = serializers.CharField(max_length=1000, required=False)

    TopicsCovered = serializers.CharField(max_length=1000, required=False)
    EventResourcesLink = serializers.CharField(max_length=1000, required=False)
    NotableSessions = serializers.CharField(max_length=1000, required=False)
    KeynoteSpeaker = serializers.CharField(max_length=1000, required=False)
    Announcements = serializers.CharField(max_length=1000, required=False)

    EventPhotosLink = serializers.CharField(max_length=1000, required=False)

    DiscussedTopics = serializers.CharField(max_length=1000, required=False)

    EventMaterialsLink = serializers.CharField(max_length=1000, required=False)

    #Event cancellation email
    NewEventDate = serializers.CharField(max_length=1000, required=False)
    ReasonForPostponement = serializers.CharField(max_length=1000, required=False)

    AlternativeOption1 = serializers.CharField(max_length=1000, required=False)
    AlternativeOption2 = serializers.CharField(max_length=1000, required=False)
    AlternativeOption3 = serializers.CharField(max_length=1000, required=False)

    #Event Feedback mail
    FeedbackFormLink = serializers.CharField(max_length=1000, required=False)

    CommentsFormLink = serializers.CharField(max_length=1000, required=False)

    SuggestionsFormLink = serializers.CharField(max_length=1000, required=False)

    RatingsFormLink = serializers.CharField(max_length=1000, required=False)
    #Event promotion email
    RegisterNowLink = serializers.CharField(max_length=1000, required=False)
    keyhighlightsorspeakers = serializers.CharField(max_length=1000, required=False)
    briefdescriptionofeventactivitiesorpurpose = serializers.CharField(max_length=1000, required=False)

    EarlyBirdDeadline = serializers.CharField(max_length=1000, required=False)
    ClaimEarlyBirdDiscountLink = serializers.CharField(max_length=1000, required=False)
    eventhighlightsorspecialfeatures = serializers.CharField(max_length=1000, required=False)

    OfferEndDate = serializers.CharField(max_length=1000, required=False)
    GetSpecialOfferLink = serializers.CharField(max_length=1000, required=False)
    eventhighlightsorkeyattractions = serializers.CharField(max_length=1000, required=False)
    DiscountDetails = serializers.CharField(max_length=1000, required=False)

    keyattractionsorguestspeakers = serializers.CharField(max_length=1000, required=False)
    LearnMoreAndRegisterLink = serializers.CharField(max_length=1000, required=False)

    Speaker1Bio = serializers.CharField(max_length=1000, required=False)
    relevanttopics = serializers.CharField(max_length=1000, required=False)
    Speaker3Bio = serializers.CharField(max_length=1000, required=False)
    Speaker2Name = serializers.CharField(max_length=1000, required=False)
    Speaker3Name = serializers.CharField(max_length=1000, required=False)
    Speaker1Name = serializers.CharField(max_length=1000, required=False)
    Speaker2Bio = serializers.CharField(max_length=1000, required=False)

    PartnerInquiryLink = serializers.CharField(max_length=1000, required=False)
 
 
    def validate(self, attrs):
        email_type = attrs.get('email_type')

        
        
        return attrs