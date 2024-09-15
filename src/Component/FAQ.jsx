import React from 'react';

const FAQsPage = () => {
  const faqs = [
    {
      question: "How is Tangerine healthy?",
      answer: "Tangerines are a great health booster due to their high vitamin C content.",
      details: "Tangerines are an excellent source of vitamin C, which supports the immune system and enhances skin health. Vitamin C is essential for collagen production, which helps maintain skin elasticity and prevent signs of aging. Additionally, tangerines contain antioxidants that combat oxidative stress and inflammation in the body.",
      image: "/path/to/tangerine.jpg",  // Replace with your image path
      imageName: "Tangerine"
    },
    {
      question: "How is Apple healthy?",
      answer: "Apples are a nutritious fruit with many health benefits.",
      details: "Apples are rich in dietary fiber, particularly soluble fiber, which can help lower cholesterol levels. They also contain antioxidants, including quercetin, which may reduce inflammation and support heart health. Apples are a low-calorie snack that can aid in weight management and improve digestion.",
      image: "/path/to/apple.jpg",  // Replace with your image path
      imageName: "Apple"
    },
    {
      question: "How is Banana healthy?",
      answer: "Bananas are packed with essential nutrients and health benefits.",
      details: "Bananas are an excellent source of potassium, which helps regulate blood pressure and maintain heart health. They also provide vitamin C, vitamin B6, and dietary fiber. Bananas can aid in digestion, provide quick energy, and support overall cardiovascular health.",
      image: "/path/to/banana.jpg",  // Replace with your image path
      imageName: "Banana"
    },
    {
      question: "How is Orange healthy?",
      answer: "Oranges are renowned for their high vitamin C content and other health benefits.",
      details: "Oranges are rich in vitamin C, which strengthens the immune system and supports skin health. They also contain antioxidants like flavonoids, which can help reduce inflammation and support heart health. Additionally, oranges are a good source of dietary fiber, which aids digestion.",
      image: "/path/to/orange.jpg",  // Replace with your image path
      imageName: "Orange"
    },
    {
      question: "How is Strawberry healthy?",
      answer: "Strawberries are a delicious fruit with various health benefits.",
      details: "Strawberries are high in antioxidants, including vitamin C, which helps combat oxidative stress and inflammation. They also provide dietary fiber, which supports digestive health. Additionally, strawberries contain compounds that may help regulate blood sugar levels and support heart health.",
      image: "/path/to/strawberry.jpg",  // Replace with your image path
      imageName: "Strawberry"
    },
    // Add more FAQs with similar structure
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-green-50 to-yellow-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>

        <ul className="space-y-12">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col md:flex-row md:space-x-8 transform hover:scale-105">
              
              {/* Image and Name */}
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <img src={faq.image} alt={faq.question} className="w-full md:w-64 h-64 object-cover rounded-lg border-4 border-gray-300 shadow-md" />
                <p className="text-center text-gray-700 font-medium mt-2">{faq.imageName}</p>
              </div>

              <div className="flex flex-col justify-between">
                {/* Question */}
                <h3 className="text-3xl font-semibold text-blue-800 mb-4">{faq.question}</h3>
                
                {/* Answer */}
                <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                
                {/* Additional Details */}
                <p className="text-gray-600 leading-relaxed">{faq.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQsPage;
