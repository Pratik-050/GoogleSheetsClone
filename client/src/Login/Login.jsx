import ButtonGo from "./ButtonGo";
import ButtonTry from "./ButtonTry";

export default function Login() {
  return (
    <>
      <navbar class="flex p-4 border-b-2 border-gray-200 w-screen md:space-x-16">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1498px-Google_Sheets_logo_%282014-2020%29.svg.png"
          alt="logo"
          class="w-6 mr-2"
        />
        <h1 class="font-bold text-2xl text-gray-600">
          MERN <span class="text-gray-500 font-normal">Sheets</span>
        </h1>
      </navbar>

      <body class="p-4 max-w-5xl md:w-screen mx-auto flex flex-col md:flex-row">
        <div class="text-center">
          <h5 class="font-semi-bold text-4xl text-center max-w-sm mt-12 mx-auto md:text-6xl md:max-w-lg md:text-left">
            Make data-driven dicisions, in MERN Sheets
          </h5>
          <p class="text-gray-500 text-center mx-auto mt-4 max-w-sm md:text-left md:text-lg">
            Create and collaborate on online spreadsheets in real-time and from
            any device.
          </p>
          <div class="flex flex-col md:flex-row ">
            <ButtonTry />
            <ButtonGo />
          </div>
          <p class="text-gray-500 mx-auto mt-6">Don't have an account?</p>
          <a class="text-blue-600 mx-auto mt-6">Sign up here</a>
        </div>
        <img
          src="https://lh3.googleusercontent.com/PHjvBmaCx9FId_EWB2JnyIuhahnRd_RpjaFKytmrYG2uOdih5WgqBIwtc6jHo34nk5vomdZkuGuJhLMiKvJpmd9gLDZqaB_I4lRUiZXNYAZKHqlDVH1j=s0"
          alt="spreadsheet"
          class="mt-16 md:max-w-xl"
        />
      </body>
    </>
  );
}
