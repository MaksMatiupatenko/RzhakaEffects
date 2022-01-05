uniform vec2 resolution;
uniform sampler2D image;

void main() {
	vec2 coord = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);

	gl_FragColor = vec4(texture(image, coord).xyz, 1.0);
}