"use client";

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, onSnapshot, orderBy, Timestamp, serverTimestamp } from 'firebase/firestore';
import { 
  FormatQuote as QuoteIcon, Star as StarIcon, 
  VerifiedUser as VerifiedIcon, AddComment as AddCommentIcon, Close as CloseIcon 
} from '@mui/icons-material';


interface Review {
  id?: string;
  clientName: string;
  company: string;
  quote: string;
  rating: number;
  createdAt?: Timestamp | Date | null;
  approved?: boolean;
}



const TestimonialsAndFeedback = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState<Review>({ clientName: '', company: '', quote: '', rating: 5 });

  // 1. LIVE DATA: Get only APPROVED reviews from Firebase
  useEffect(() => {
    const q = query(
      collection(db, "vi_reviews"), 
      // where("approved", "==", true), // Uncomment this line after you've approved a few!
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Review));
      setTestimonials(reviewsData);
    });

    return () => unsubscribe();
  }, []);

  // 2. SUBMIT DATA: Push to Firebase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "vi_reviews"), {
        ...newReview,
        createdAt: serverTimestamp(),
        approved: true // Keeping it TRUE for now so you can see it work immediately!
      });
      
      setNewReview({ clientName: '', company: '', quote: '', rating: 5 });
      setIsFormOpen(false);
      alert("Success! Your review is now live on the PDC Ltd website.");
    } catch (err) {
      console.error("Firebase Error:", err);
      alert("Something went wrong. Please check your internet connection.");
    }
  };

  return (
  <section className="bg-white py-24 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6">

      {/* SECTION HEADER */}
      <div className="mb-16">
        <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
          Client Testimonials
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mt-4">
          Trusted by Government & Corporate Clients
        </h2>

        <div className="w-16 h-1 bg-orange-500 mt-6"></div>

        <button
          onClick={() => setIsFormOpen(true)}
          className="mt-8 bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-md font-semibold text-white"
        >
          Leave a Review
        </button>
      </div>

      {/* TESTIMONIAL GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.length > 0 ? (
          testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-gray-200 p-8 transition hover:border-orange-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    sx={{ fontSize: 16, color: '#f97316' }}
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                “{t.quote}”
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-[#0B1C2D]">
                  {t.clientName}
                </h4>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                  {t.company}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic">
            No testimonials yet.
          </p>
        )}
      </div>
    </div>

    {/* MODAL */}
    {isFormOpen && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
        <div className="bg-white max-w-lg w-full p-10 relative border border-gray-200">

          <button
            onClick={() => setIsFormOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-orange-500"
          >
            <CloseIcon />
          </button>

          <h3 className="text-2xl font-bold text-[#0B1C2D] mb-8">
            Submit Your Feedback
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                value={newReview.clientName}
                onChange={(e) =>
                  setNewReview({ ...newReview, clientName: e.target.value })
                }
                className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-orange-500"
                placeholder="Your Name"
              />

              <input
                required
                value={newReview.company}
                onChange={(e) =>
                  setNewReview({ ...newReview, company: e.target.value })
                }
                className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-orange-500"
                placeholder="Company"
              />
            </div>

            <select
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: Number(e.target.value) })
              }
              className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-orange-500"
            >
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
            </select>

            <textarea
              required
              rows={4}
              value={newReview.quote}
              onChange={(e) =>
                setNewReview({ ...newReview, quote: e.target.value })
              }
              className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-orange-500"
              placeholder="Your experience..."
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-md font-semibold text-white"
            >
              Post Feedback
            </button>
          </form>
        </div>
      </div>
    )}
  </section>
  )
};

export default TestimonialsAndFeedback;