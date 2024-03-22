import Button from "../../ui/Button";
import Link from "../../ui/Link";

export default function Registration() {
  return (
    <div className="border border-red-500 text-center">
      <h1 className="text-2xl font-bold text-primary-color mb-4">Rozgar</h1>
      <div className="bg-white">
        <h1 className="font-medium text-xl border-b-2 py-2 mb-4">
          Registration
        </h1>
        <form action="" className="p-4 space-y-4">
          <div className="border min-w-96 rounded-md">
            <input
              type="text"
              placeholder="Name"
              className="  w-full px-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="border min-w-96 rounded-md">
            <input
              type="text"
              placeholder="Phone Number"
              className="  w-full px-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="border min-w-96 rounded-md">
            <input
              type="text"
              placeholder="Location"
              className="  w-full px-4 py-2 rounded-md focus:outline-none"
            />
          </div>

          {/* Male or Female */}

          <div>
            <p className="text-left ">gender</p>
            <div className="flex items-center justify-center gap-4">
              <div>
                <input type="radio" id="male" name="gender" />
                <label htmlFor="male" className="font-sans">
                  Male
                </label>
              </div>

              <div>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          {/* select job */}
          <select name="" id="">
            <option value="select job">select job</option>
            <option value="teacher">Teacher</option>
            <option value="mechanic">Mechanic</option>
          </select>

          <Button>Register</Button>
          <Link>Already register</Link>
        </form>
      </div>
    </div>
  );
}
