import React from 'react';

const ContentSection: React.FC = () => {
  const cards = [
    { text: 'Card 1 Text', emoji: '😊', color: 'bg-blue-200' },
    { text: 'Card 2 Text', emoji: '🚀', color: 'bg-green-200' },
    { text: 'Card 3 Text', emoji: '💡', color: 'bg-yellow-200' },
    { text: 'Card 4 Text', emoji: '🌟', color: 'bg-purple-200' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Content Does This Sound Familiar?</h2>
        
        <div className="flex overflow-x-scroll space-x-4 pb-8">
          {cards.map((card, index) => (
            <div key={index} className={`flex-shrink-0 w-72 p-4 rounded-lg shadow-md ${card.color}`}>
              <div className="text-2xl mb-2">{card.emoji}</div>
              <p className="text-gray-700">{card.text}</p>
            </div>
          ))}
        </div>
        
     
      </div>
    </section>
  );
};

export default ContentSection;
