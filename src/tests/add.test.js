const generateGreeting = (name) => `Hello ${name}!`;

test('should return name in greeting', () => {
    const res = generateGreeting('Eva');
    expect(res).toBe('Hello Eva!');
});