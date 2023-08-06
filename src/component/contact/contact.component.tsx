import { ContactContext } from "@/src/context/contact.context";
import { PortableText } from "@portabletext/react";
import { useContext } from "react";



const ContactComponent = () => {

    const { contact } = useContext(ContactContext);

    return (
        <div id="contact" className="pt-10 mt-10
                                    lg:px-64 lg:pt-20 lg:mt-20">
            <p className="text-lg text-pink-300 text-center mb-3
                          lg:mb-6 lg:text-3xl">{contact.header}</p>
            <div className="text-xs tracking-wider text-center lg:text-sm">
                <PortableText value={contact.content}></PortableText>
            </div>
            <div className="mt-4 flex flex-row justify-center lg:mt-8">
                <a
                className="text-xs border-2 rounded-md
                           bg-gradient-to-r from-pink-200 from-10% via-pink-400 via-30% to-pink-600 to-60% text-transparent bg-clip-text
                         border-gray-500 p-2  hover:border-pink-600
                         lg:text-base"
                href={"mailto:" + contact.email}
                title="mail"
                target="_blank"
                >Let&apos;s talk!</a>

            </div>
           

        </div>

    )
}

export default ContactComponent;