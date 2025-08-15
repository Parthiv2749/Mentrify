import { Card, CardHeader, CardTitle, CardContent } from "../../UI/Card/card";

function ExpectationReality() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Expectation vs Reality
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Expectation */}
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-red-600">Expectation</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-gray-600">
                Smooth career journey, clear guidance, easy placements.
              </p>
              <img
                src="/expectation.jpg"
                alt="Expectation"
                className="rounded-lg shadow"
              />
            </CardContent>
          </Card>

          {/* Reality */}
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-600">Reality with Mentorship</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-gray-600">
                Real challenges, but with the right mentor you navigate and grow faster.
              </p>
              <img
                src="/reality.jpg"
                alt="Reality"
                className="rounded-lg shadow"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ExpectationReality;
