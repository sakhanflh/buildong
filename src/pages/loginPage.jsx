import { LoginLayout } from "../components/layouts/login/LoginLayout";

export default function LoginPage() {
    return (
        <>
            <div className="w-full h-dvh flex p-5 bg-background-color justify-center items-center">
                <div className="w-[55%] h-full bg-cover rounded-3xl lg:flex flex-col p-5 justify-between hidden" style={{ backgroundImage: `url('/img/home.jpg')` }}>
                    <div>
                        <h1 className="text-3xl text-white font-semibold">BUILDONG</h1>
                    </div>

                    <div className="flex flex-col pt-2 border-t-4 border-dashed">
                        <div className="bg-white p-5 rounded-2xl flex flex-col gap-3">
                            <h1 className="text-2xl font-semibold">Unlock Our Advenced Tools</h1>
                            <p>Explore our app's features to discover, buy, or rent your dream property. From virtual tours to mortgage assistence, we've got you covered!</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[45%] lg:px-[5%]">
                    <LoginLayout />
                </div>
            </div>
        </>
    )
}