uniform vec2 resolution;
uniform sampler2D image;
uniform float time;

void main() {
	vec2 coord = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);

	vec3 color = texture(image, coord).rgb;

	color.r *= sin(2 * time);
	color.b *= cos(2 * time);

	gl_FragColor = vec4(color, 1.0);
}