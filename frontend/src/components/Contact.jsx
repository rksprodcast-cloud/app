import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { projectData } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi, I'm interested in JD NEXUS project at ${projectData.location}`);
    window.open(`https://wa.me/91${projectData.contact}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-4">
            <p className="text-sm font-semibold">GET IN TOUCH</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to make JD NEXUS your home? Reach out to us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Send us an Enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12 text-lg">
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-xl border-2 hover:border-coral-400 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <a href={`tel:${projectData.contact}`} className="text-teal-600 hover:text-teal-700 text-lg">
                      {projectData.contact}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 hover:border-coral-400 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <a href={`mailto:${projectData.email}`} className="text-teal-600 hover:text-teal-700">
                      {projectData.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 hover:border-coral-400 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Office Address</p>
                        <p className="text-gray-700 text-sm">{projectData.officeAddress}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Project Location</p>
                        <p className="text-gray-700 text-sm">{projectData.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-14 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
