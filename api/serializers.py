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
    
    subject = serializers.CharField(max_length=255, required=False)

    def validate(self, attrs):
        # Additional validation logic if needed
        email_type = attrs.get('email_type')
        if email_type == 'Newsletter Email' and not attrs.get('CompanyName'):
            raise serializers.ValidationError({'CompanyName': 'This field is required for Newsletter Email'})
        return attrs
