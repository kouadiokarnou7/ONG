
import React from "react";

function contact () {

    return (
        <section id="contact" className="bg-blue-50 w-full min-h-screen flex flex-col justify-center items-center px-6">
          <div className="container mx-auto max-w-lg">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Contactez-nous</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Nom" className="p-3 border rounded" required />
              <input type="email" placeholder="Email" className="p-3 border rounded" required />
              <textarea placeholder="Message" className="p-3 border rounded"  required></textarea>
              <button type="submit" className="bg-orange-500 text-white p-3 rounded hover:bg-orange-600">
                Envoyer
              </button>
            </form>
          </div>
        </section>
    )
}
export default contact