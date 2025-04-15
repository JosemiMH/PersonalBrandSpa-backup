import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  email: z.string().email({ message: 'Por favor introduce un email válido' }),
  company: z.string().optional(),
  service: z.string({ required_error: 'Por favor selecciona un servicio' }),
  message: z.string().min(10, { message: 'Tu mensaje debe tener al menos 10 caracteres' }),
  privacy: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar la política de privacidad',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
      privacy: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', data);
      
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactar. Te responderé a la brevedad.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-turquoise font-medium mb-3">Contacto</h2>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
              ¿Hablamos sobre tu proyecto?
            </h3>
            <p className="text-charcoal-light mb-8">
              Completa el formulario y me pondré en contacto contigo para programar una consulta inicial gratuita donde podremos hablar sobre tus necesidades específicas.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-envelope text-turquoise"></i>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Email</h4>
                  <a href="mailto:contacto@evaperez.com" className="text-turquoise hover:text-turquoise-dark">contacto@evaperez.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-phone text-turquoise"></i>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Teléfono</h4>
                  <a href="tel:+34600000000" className="text-turquoise hover:text-turquoise-dark">+34 600 000 000</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-turquoise"></i>
                </div>
                <div>
                  <h4 className="font-medium text-charcoal mb-1">Ubicación</h4>
                  <p className="text-charcoal-light">Barcelona, España (Disponible para proyectos internacionales)</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-turquoise/10 rounded-full flex items-center justify-center text-turquoise hover:bg-turquoise hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-turquoise/10 rounded-full flex items-center justify-center text-turquoise hover:bg-turquoise hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-turquoise/10 rounded-full flex items-center justify-center text-turquoise hover:bg-turquoise hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-turquoise/10 rounded-full flex items-center justify-center text-turquoise hover:bg-turquoise hover:text-white transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-charcoal font-medium mb-2">Nombre</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Tu nombre" 
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-turquoise focus:border-turquoise outline-none transition-colors" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-charcoal font-medium mb-2">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="tu@email.com" 
                            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-turquoise focus:border-turquoise outline-none transition-colors" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-charcoal font-medium mb-2">Empresa/Organización</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Nombre de tu empresa" 
                          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-turquoise focus:border-turquoise outline-none transition-colors" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-charcoal font-medium mb-2">Servicio de interés</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-turquoise focus:border-turquoise outline-none transition-colors">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="consultoria">Consultoría Estratégica</SelectItem>
                          <SelectItem value="proyectos">Gestión de Proyectos</SelectItem>
                          <SelectItem value="formacion">Formación y Desarrollo</SelectItem>
                          <SelectItem value="interim">Interim Management</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-charcoal font-medium mb-2">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntame sobre tu proyecto o necesidad" 
                          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-turquoise focus:border-turquoise outline-none transition-colors" 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex items-start mb-6">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange}
                          className="mt-1 mr-2" 
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-charcoal-light">
                          Acepto la política de privacidad y el tratamiento de mis datos para recibir comunicaciones.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-turquoise hover:bg-turquoise-dark text-white font-medium py-3 rounded transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
