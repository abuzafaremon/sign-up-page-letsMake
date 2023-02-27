import img from '../../assets/images/auth/image.jpg'
import google from '../../assets/images/auth/google.png'
const SignUp = () => {
  return (
    <section className="bg-slate-200 p-10">
      <div className="flex items-center bg-white">
        <div className="w-full p-10">
          <div className='max-w-xs relative'>
            <div className='grid gap-4 mb-6'>
              <div>
                <h2 className='text-3xl font-bold text-slate-900 mb-1'>Login</h2>
                <p>See your growth and get consulting support!</p>
              </div>
              <button className='flex items-center gap-2 justify-center border border-slate-300 rounded-full py-2'>
                <img width={20} src={google} alt="google" />
                <span className='text-slate-400'>Sign in with Google</span>
              </button>
            </div>
            <form className='grid gap-6'>
              <div>
                <label htmlFor="email" className='block font-medium mb-1'>Email<sup>*</sup></label>
                <input type="email" name='email' id='email' placeholder='mail@website.com' className="w-full rounded-full py-2 px-3 border border-slate-300 outline-none" />
              </div>
              <div>
                <label htmlFor="password" className='block font-medium mb-1'>Password<sup>*</sup></label>
                <input type="password" name='password' id='password' placeholder='min. 8 character' className="w-full rounded-full py-2 px-3 border border-slate-300 outline-none" />
              </div>
              <div>
                <button className='w-full rounded-full bg-blue-600 p-2 text-white'>Login</button>
              </div>
            </form>
            <footer className='pt-28'>
              <p className='text-slate-400'>&copy; 2023 Erdem All Right Reserved</p>
            </footer>
          </div>
        </div>
        <div className="w-full">
          <img className='w-full' src={img} alt="sign-up-page-img" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;