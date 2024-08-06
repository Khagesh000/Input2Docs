from rest_framework import serializers

class EmailSerializer(serializers.Serializer):
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


    subject = serializers.CharField(max_length=255, required=False)

    

    def validate(self, attrs):
        email_type = attrs.get('email_type')

        
        
        return attrs