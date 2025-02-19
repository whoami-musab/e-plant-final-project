'use client'
// import Image from "next/image";
// import {App} from "@/app/page";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/products');
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen py-2 bg-[url('https://cdn.pixabay.com/photo/2021/08/19/12/37/hill-6557956_1280.jpg')] bg-cover bg-no-repeat">
        <div className="about items-center bg-gray-500/30 flex flex-col md:flex-row gap-4 w-11/12 p-5 rounded-lg">
          <div className="btn w-4/12 text-white flex flex-col items-center justify-center gap-4">
            <h1 className="text-green-500 font-bold text-5xl text-center">Plant Green</h1>
            <p>Join our community</p>
            <button className="
            bg-green-500 
              py-2 
              px-3
              w-full 
              rounded 
            hover:bg-green-700
              transition"
              onClick={handleNavigate}
            >
              Get Started
            </button>
          </div>
          <div className="lorem selection:bg-green-500/30 p-5 rounded-lg text-white w-8/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed, hic cum veniam debitis impedit error maxime aliquid cumque aut voluptatum repellat, voluptas eaque sit minima officiis reiciendis iure fugiat asperiores distinctio aspernatur nulla beatae. Rerum, ipsum aperiam. Molestias commodi, nobis enim numquam, at rem deserunt aut temporibus voluptatibus nisi deleniti odit cupiditate impedit alias suscipit minima dolore dignissimos, aspernatur itaque. Praesentium cum quaerat magnam! Quibusdam laborum facilis explicabo accusamus eos nulla asperiores sequi nostrum, aperiam quidem? Exercitationem incidunt sapiente atque numquam maiores architecto blanditiis consequatur sunt enim repudiandae amet vitae neque sequi, dolore quam quas ad. Aliquid, aut reiciendis? Laudantium eveniet suscipit vero error natus laboriosam consectetur excepturi consequatur tempore nostrum perferendis fuga incidunt accusantium, repellat dignissimos, accusamus rerum! Molestiae soluta reiciendis repellat quod velit assumenda atque nihil earum laborum dolores voluptates mollitia, expedita asperiores excepturi provident quibusdam, facilis doloribus tempora beatae maiores autem voluptatibus! Nisi non at consectetur culpa doloremque illo libero voluptatum vitae aliquam qui, quisquam, doloribus iusto nemo quia cumque vero? Fugiat, ratione quia! Accusantium voluptate nostrum rerum exercitationem! Iusto laborum vero omnis ullam sunt, esse reiciendis minus aliquid, voluptatibus commodi, dignissimos ducimus. Et tempore esse distinctio error magni aspernatur voluptatem. Quae consequatur, alias nobis, nostrum itaque similique velit, tempore placeat exercitationem impedit illo sit dolorem! Numquam sint, deserunt accusantium optio consequatur cupiditate sed? Dignissimos ipsum, odit modi exercitationem, eligendi nihil aut repudiandae numquam molestiae alias tempora enim similique rem ab perspiciatis ipsam dicta beatae voluptas! Nisi vel nihil impedit suscipit commodi eos sit sint officia at, explicabo voluptatum quia ex repellendus rem illo reiciendis voluptatem, minus accusantium voluptate deserunt unde porro corporis ipsum. Quos eligendi illum tempora nihil, molestias qui reiciendis provident laboriosam fuga ab, dolorum consectetur officiis hic! Eos tenetur autem similique quae facere deserunt in, explicabo rerum assumenda sed qui amet ratione! Quis.
          </div>
        </div>
      </div>
    </div>

  );
}
