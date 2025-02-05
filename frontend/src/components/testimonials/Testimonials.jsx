import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: "Yatin",
    position: "Student",
    message: "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Yashi Pandey",
    position: "Student",
    message: "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Anmol",
    position: "Student",
    message: "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Akshat Palyal",
    position: "Student",
    message: "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => (
  <section className="py-16 sm:py-24 bg-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">What our students say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <p className="text-gray-600">{testimonial.message}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;