
import React from 'react'

const Testimoials = () => {
const testimonials = [
    {
      name: "John Smith",
      comment: "Excellent care and professional staff. The doctors took time to explain everything clearly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Maria Garcia",
      comment: "Outstanding medical facility with state-of-the-art equipment. Highly recommend!",
      rating: 5,
      image: "https://tse4.mm.bing.net/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600">Read testimonials from our satisfied patients</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimoials
