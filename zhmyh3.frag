uniform vec2 resolution;
uniform sampler2D image;
uniform float power;

void main() {
	vec2 coord = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);

	vec3 color = texture(image, coord).rgb;

	color.r = texture(image, coord - 0.1 * vec2(power)).r;
	color.g = texture(image, coord + 0.1 * vec2(power, 0.0)).g;
	color.g = texture(image, coord + 0.1 * vec2(0.0, power)).b;

	color.r = pow(color.r, 1.0 - power);
	color.g = pow(color.g, 1.0 - power);
	color.b = pow(color.b, 1.0 - power);

	gl_FragColor = vec4(color, 1.0);
}