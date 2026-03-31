import { useScrollFade } from "@/hooks/use-scroll-fade";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Bitte geben Sie Ihren Namen an." }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse an." }),
  phone: z.string().min(5, { message: "Bitte geben Sie eine Telefonnummer an." }),
  eventType: z.string().min(2, { message: "Bitte geben Sie die Art des Events an." }),
  date: z.string().min(2, { message: "Bitte geben Sie ein Datum an." }),
  location: z.string().min(2, { message: "Bitte geben Sie eine Location an." }),
  message: z.string().min(10, { message: "Ihre Nachricht ist zu kurz." }),
});

export function Contact() {
  const { domRef, isVisible } = useScrollFade();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      location: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Anfrage erfolgreich gesendet",
      description: "Wir werden uns in Kürze bei Ihnen melden.",
      duration: 5000,
    });
    form.reset();
  }

  return (
    <section id="kontakt" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div 
            ref={domRef as any}
            className={`w-full lg:w-1/3 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
          >
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Kontakt</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">Lassen Sie uns sprechen</h2>
            <div className="w-16 h-[1px] bg-primary mb-12"></div>
            
            <p className="text-muted-foreground font-light leading-relaxed mb-12">
              Jedes großartige Event beginnt mit einer Vision. Kontaktieren Sie uns für ein unverbindliches Erstgespräch in unserem Studio.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-xl mb-2">Studio</h4>
                <p className="text-muted-foreground font-light">Königsallee 42<br/>40212 Düsseldorf<br/>Deutschland</p>
              </div>
              
              <div>
                <h4 className="font-serif text-xl mb-2">Kontakt</h4>
                <p className="text-muted-foreground font-light mb-1">T: +49 (0) 123 456 789</p>
                <p className="text-muted-foreground font-light">E: atelier@floric.de</p>
              </div>
              
              <button 
                className="flex items-center gap-3 text-primary hover:text-foreground transition-colors duration-300 mt-8 group"
                data-testid="btn-whatsapp"
                onClick={() => window.open('https://wa.me/49123456789', '_blank')}
              >
                <span className="w-10 h-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.478-1.638-1.651-1.935-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </span>
                <span className="uppercase tracking-widest text-sm font-medium">WhatsApp Chat</span>
              </button>
            </div>
          </div>

          <div 
            className={`w-full lg:w-2/3 bg-card border border-border p-10 md:p-14 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Vollständiger Name *</FormLabel>
                        <FormControl>
                          <Input className="border-0 border-b border-border rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg" {...field} data-testid="input-name" />
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
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">E-Mail Adresse *</FormLabel>
                        <FormControl>
                          <Input className="border-0 border-b border-border rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Telefonnummer *</FormLabel>
                        <FormControl>
                          <Input className="border-0 border-b border-border rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Art des Events *</FormLabel>
                        <FormControl>
                          <Input placeholder="z.B. Hochzeit, Jubiläum" className="border-0 border-b border-border rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg placeholder:text-muted-foreground/30" {...field} data-testid="input-event-type" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Datum *</FormLabel>
                        <FormControl>
                          <Input type="date" className="border-0 border-b border-border rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg" {...field} data-testid="input-date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Location (falls bekannt) *</FormLabel>
                        <FormControl>
                          <Input className="border-0 border-b border-border rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg" {...field} data-testid="input-location" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Ihre Vision / Nachricht *</FormLabel>
                      <FormControl>
                        <Textarea 
                          className="border-0 border-b border-border rounded-none px-0 py-4 bg-transparent focus-visible:ring-0 focus-visible:border-primary text-lg min-h-[120px] resize-none" 
                          {...field} 
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button 
                  type="submit" 
                  className="w-full py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 uppercase tracking-widest text-sm font-medium mt-8"
                  data-testid="btn-submit-form"
                >
                  Anfrage verbindlich absenden
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}