import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer as enzymeSerializer } from "enzyme-to-json";

// @ts-ignore
expect.addSnapshotSerializer(enzymeSerializer({ mode: "deep" }));

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer(emotion));
