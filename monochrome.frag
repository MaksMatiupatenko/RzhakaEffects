uniform vec2 resolution;
uniform sampler2D image;

void main() {
	vec2 coord = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);

	vec3 color = texture(image, coord).rgb;

	float lightness = (color.r + color.g + color.b) / 3.0;

	gl_FragColor = vec4(vec3(lightness), 1.0);
}