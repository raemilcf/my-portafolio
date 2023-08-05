import { ContactContext } from "@/src/context/contact.context";
import { PortableText } from "@portabletext/react";
import { useContext } from "react";



const ContactComponent = () => {

    const { contact } = useContext(ContactContext);

    return (
        <div id="contact" className="px-64 pt-20 mt-20">
            <p className="text-3xl text-pink-300 text-center mb-6">{contact.header}</p>
            <div className="text-sm tracking-wider text-center">
                <PortableText value={contact.content}></PortableText>
            </div>
            <div className="mt-8 flex flex-row justify-center ">
                <a
                className=" border-2 rounded-md
                           bg-gradient-to-r from-pink-200 from-10% via-pink-400 via-30% to-pink-600 to-60% text-transparent bg-clip-text
                         border-gray-500 p-2  hover:border-pink-600"
                href={"mailto:" + contact.email}
                title="mail"
                target="_blank"
                >Let&apos;s talk!</a>

            </div>
           

        </div>

    )
}

export default ContactComponent;