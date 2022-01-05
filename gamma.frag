uniform vec2 resolution;
uniform sampler2D image;
uniform float gamma;

void main() {
	vec2 coord = vec2(gl_FragCoord.x / resolution.x, gl_FragCoord.y / resolution.y);

	vec3 color = texture(image, coord).rgb;

	color.r = pow(color.r, gamma);
	color.g = pow(color.g, gamma);
	color.b = pow(color.b, gamma);

	gl_FragColor = vec4(color, 1.0);
}