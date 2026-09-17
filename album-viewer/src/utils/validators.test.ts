import { describe, expect, it } from "vitest";
import { validateDate, validateAlbumId, validateIPV6 } from "./validators";

describe("validateDate", () => {
  it("accepts valid French dates", () => {
    expect(validateDate("31/12/2024")).toBeInstanceOf(Date);
    expect(validateDate("01/01/2000")).toBeInstanceOf(Date);
  });

  it("rejects invalid dates", () => {
    expect(validateDate("30/02/2024")).toBeNull();
    expect(validateDate("2024-12-31")).toBeNull();
    expect(validateDate("abc")).toBeNull();
    expect(validateDate("")).toBeNull();
  });
});

describe("validateAlbumId", () => {
  it("accepts numeric ids", () => {
    expect(validateAlbumId("123")).toBe(true);
    expect(validateAlbumId("0")).toBe(true);
  });

  it("rejects non numeric ids", () => {
    expect(validateAlbumId("abc")).toBe(false);
    expect(validateAlbumId("1a")).toBe(false);
    expect(validateAlbumId("")).toBe(false);
  });
});

describe("validateIPV6", () => {
  it("accepts valid IPv6 addresses", () => {
    expect(validateIPV6("2001:db8::1")).toBe(true);
    expect(validateIPV6("::1")).toBe(true);
    expect(validateIPV6("2001:db8:3333:4444:5555:6666:7777:8888")).toBe(true);
  });

  it("rejects invalid IPv6 addresses", () => {
    expect(validateIPV6("192.168.1.1")).toBe(false);
    expect(validateIPV6("12345::1")).toBe(false);
    expect(validateIPV6("not-an-ip")).toBe(false);
  });
});
