export default function Contact() {
    return (
        <div className="bg-background">
            <section id="contact" className="py-32 px-10 max-w-4xl mx-auto ">
                <div className="bg-[linear-gradient(to_bottom,#020817,#0f172a)] rounded-2xl p-10">
                    <p className="text-accent uppercase tracking-widest mb-3 text-sm font-medium">
                        Contact
                    </p>
                    <h2 className="text-4xl font-bold mb-6">
                        Get in <span className="text-accent">Touch</span>
                    </h2>

                    <p className="text-muted mb-10 leading-relaxed">
                        Have a project in mind or just want to say hi? Send me a message and I’ll get back to you.
                    </p>

                    <form className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm text-muted mb-2">Name</label>
                            <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-secondary border border-card text-text outline-none focus:border-accent transition" />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-muted mb-2">Email</label>
                            <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-secondary border border-card text-text outline-none focus:border-accent transition" />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm text-muted mb-2">Message</label>
                            <textarea rows={5} placeholder="Write your message..." className="w-full px-4 py-3 rounded-xl bg-secondary border border-card text-text outline-none focus:border-accent transition resize-none" />
                        </div>

                        {/* Button */}
                        <button className="w-full bg-[var(--accent)] text-sm py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-accent/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}