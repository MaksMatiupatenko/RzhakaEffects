uniform vec2 resolution;
uniform sampler2D image;

void main() {
	vec2 coord = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);
	coord *= 0.99;

	vec3 color;

	color.r = texture(image, coord).r;
	color.g = texture(image, coord + vec2(0.01, 0.0)).g;
	color.b = texture(image, coord + vec2(0.0, 0.01)).b;

	gl_FragColor = vec4(color, 1.0);
}