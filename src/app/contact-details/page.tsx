const ContactDetails = () => {
  return (
    <main>
      <h1 className="font-bold text-5xl flex items-center justify-center">
        <div className="bg-gray h-px mr-8 w-3/12" />
        Get In Touch
        <div className="bg-gray h-px ml-8 w-3/12" />
      </h1>

      <section className="flex min-h-[60vh] flex-col justify-center items-center p-24 bg-neutral-100 dark:bg-black mt-20">
        <p className="text-lg text-center w-3/5">
          Growing your team or have a project you want to collaborate on or you
          just want to chat, you can connect with me on any of my social media
          links and I will respond to you ASAP.
        </p>
        <div className="flex gap-6 justify-center mt-14">
          <a href="mailto:talabifunmilayo@gmail.com">
            <svg
              id="Capa_1"
              enable-background="new 0 0 479.058 479.058"
              height="512"
              viewBox="0 0 479.058 479.058"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 fill-purple"
            >
              <path d="m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/funmilayo-talabi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="512pt"
              viewBox="0 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 fill-purple"
            >
              <path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
            </svg>
          </a>
          <a
            href="https://twitter.com/fun_tee7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              className="w-10 h-10 fill-purple"
            >
              <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactDetails;